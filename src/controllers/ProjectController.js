const Project = require("../models/Project");
const ProjectBB = require("../models/ProjectBB");
const ProjectBBI = require("../models/ProjectBBI");
const { show } = require("./BBIController");

module.exports = {

  async index(req, res) {

    const projects = await Project.findAll({
      where: {id_user: req.id_user}
    });
    return res.json(projects)
  },

  async indexAll(req, res) {
    const projects = await Project.findAll({
      include: [
        { 
          association: 'Process',
        },
      ]
    });
    return res.json(projects)
  },

  async update(req, res) {
    const { id } = req.params;
    const { step,  step_process, name } = req.body;

    const project = await Project.findByPk(id);

    if(!project) {
        return res.status(400).json({error: 'Project not found!'});
    }

    await project.update({ step, step_process, name });

    return res.json(project);
  },

  async show(req, res) {
    const { id } = req.params;
    let project = await Project.findOne({
      where: {id},
      include: [
        {
          model: ProjectBB, as: 'bbs',
          include: [
            { association: 'bb'},
            {
              model: ProjectBBI, as: 'bbis',
              include: [
                { association: 'bbi' }
              ]
            }
          ]
        },
        {
          association: 'Requirements',
          through: {
            attributes: []
          }
        },
        { 
          association: 'Process',
        },
      ]
    });

    if(!project) {
      return res.status(400).json({error: 'No project with this id.'});
    }

    return res.json(project)
  },

  async create(req, res) {
    const { name } = req.body;
    const { id_user} = req;

    const project = await Project.create({ name, id_user });

    return res.json(project)
  },

  async setBlocks(req, res) {
    const { blocks, id_project } = req.body;

    let project = await Project.findByPk(id_project);

    await ProjectBB.destroy({
      where: {id_project}
    })

    for(const block of blocks) {
      const { instanceId, parentId, selectionType, id} = block
      const res = await ProjectBB.create({ id_project, instanceId, parentId, selectionType, id_bb: id })
      const id_project_bb = res.id;

      for(const bbi of block.bbis) {
        const { instanceId, parentId, selectionType, id } = bbi;
        const res = await ProjectBBI.create({ id_project_bb, instanceId, parentId, selectionType, id_bbi: id })
      }
    }

    project = await Project.findOne({
      where: {id: id_project},
      include: [
        {
          model: ProjectBB, as: 'bbs',
          include: [
            { association: 'bb'},
            {
              model: ProjectBBI, as: 'bbis',
              include: [
                { association: 'bbi' }
              ]
            }
          ]
        }
      ],
    });

    

    return res.json(project)
  },

  async setRequirements(req, res) {
    const { requirements, id_project } = req.body;

    let project = await Project.findByPk(id_project);

    if(!project) {
      return res.status(400).json({error: 'No project with this id.'});
    }

    await project.setRequirements(requirements.map(req => req.id))

    project = await Project.findOne({
      where: {id: id_project},
      include: [
        {
          model: ProjectBB, as: 'bbs',
          include: [
            { association: 'bb'},
            {
              model: ProjectBBI, as: 'bbis',
              include: [
                { association: 'bbi' }
              ]
            }
          ]
        },
        {
          association: 'Requirements',
          through: {
            attributes: []
          }
        }
      ]
    });

    return res.json(project)
  },

}