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

        const { name, key, description, version, resource, deploymentId } = process_definition[0];
        const process = await Process.create({ name, description, version, resource, id_deployment: deploymentId, key });
        
        await project.update({id_process: process.id})
      }
    }

    return res.json(project)
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