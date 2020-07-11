const Project = require("../models/Project");
const Process = require("../models/Process");
var fs = require('fs');

const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = {

  async index(req, res) {
    const processes = await Process.findAll();
    return res.json(processes)
  },

  async show(req, res) {
    const { id } = req.params;
    
    const process = await Process.findByPk(id);
    return res.json(process)
  },

  async update(req, res) {
    const { id } = req.params;
    const { business_key, description, id_definition, id_deployment, id_instance, key, name, resource, version } = req.body;

    const process = await Process.findByPk(id);

    if(!process) {
        return res.status(400).json({error: 'Process not found!'});
    }

    await process.update({ business_key, description, id_definition, id_deployment, id_instance, key, name, resource, version });

    return res.json(process);
  },

  async diagram(req, res) {
    const { id } = req.params;
    const process = await Process.findByPk(id);

    const response = await fetch(`http://localhost:8080/engine-rest/process-definition/key/${process.key}/diagram`);


    return res.json(process)
  },

  async xml(req, res) {
    const { id } = req.params;
    const process = await Process.findByPk(id);

    const response = await fetch(`http://localhost:8080/engine-rest/process-definition/key/${process.key}/xml`);
    const process_xml = await response.json();
    return res.json(process_xml)
  },

  async create(req, res) {
    const { id_project } = req.body;

    const project = await Project.findByPk(id_project);

    if(!project) {
      return res.status(400).json({error: 'Project not found'});
    }

    if(req.files.process) { 
      for(const processFile of req.files.process) {
        let { path } = processFile;
  
        const form = new FormData();
        form.append('file', fs.createReadStream(path));
  
        const response = await fetch('http://localhost:8080/engine-rest/deployment/create', {
          method: 'POST', 
          body: form
        });
  
        const camunda_response = await response.json();
      
        const response2 = await fetch(`http://localhost:8080/engine-rest/process-definition?deploymentId=${camunda_response.id}`);
  
        const process_definition = await response2.json();

        const { name, key, description, version, resource, deploymentId, id } = process_definition[0];
        const process = await Process.create({ name, description, version, resource, id_deployment: deploymentId, id_definition: id, key });
        
        await project.update({id_process: process.id, step_process: process.id})
      }
    }

    return res.json(project)
  },

  async start(req, res) {
    const { id } = req.params;
    const { id_definition, business_key } = req.body;

    const process = await Process.findByPk(id);

    if(!process) {
      return res.status(400).json({error: 'Process not found'});
    }

    const form = new FormData();
    if(business_key) form.append('businessKey', business_key);

    console.log(id_definition)
    console.log(process.id)

    const response = await fetch(`http://localhost:8080/engine-rest/process-definition/${id_definition}/start`, {
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            businessKey: process.id
          })
        });

    const process_instance = await response.json()

    await process.update({id_instance: process_instance.id})

    return res.json(process)
  },

  async completeTask(req, res) {
    const { id_task } = req.params;
    const { variables } = req.body;

    const response = await fetch(`http://localhost:8080/engine-rest/task/${id_task}/complete`, {
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {variables}
          )
        });

    return res.status(204).json({message: 'Task completed'});
  },

  async getTasks(req, res) {
    const { id_instance } = req.params;

    const response = await fetch(`http://localhost:8080/engine-rest/task?processInstanceId=${id_instance}`);

    const task_list = await response.json()

    return res.json(task_list)
  },

  async getRenderedForm(req, res) {
    const { id_task } = req.params;

    //NOT WORKING!!
    const response = await fetch(`http://localhost:8080/engine-rest/task/${id_task}/rendered-form`);
    const form = await response.json()

    return res.json(form)
  },

  async getFormVariables(req, res) {
    const { id_task } = req.params;

    const response = await fetch(`http://localhost:8080/engine-rest/task/${id_task}/form-variables`);
    const variables = await response.json()

    return res.json(variables)
  },

  async delete(req, res) {
    const { id } = req.params;

    const process = await Process.findByPk(id);

    if(!process) {
      return res.status(400).json({error: 'Process not found'});
    }

    await process.destroy({
        where: {
            id: id
        }
    });


    return res.status(204).send();
  },


}