const Capability = require("../models/Capability");
const BuildingBlock = require("../models/BuildingBlock");

module.exports = {

  async index(req, res) {
    const bbs = await BuildingBlock.findAll({
      include: [
          { 
            association: 'BlockCapabilities',
            attributes: ['id','name', 'description'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'BlockDependencies',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'DependentBlocks',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'ImplementedBy',
            attributes: ['id','name', 'description'],
            through: {
              attributes: []
            }
          }
        ],
    });

    return res.json(bbs)
  },

  async get(req, res) {
    const { id } = req.params;

    const bb = await BuildingBlock.findOne({
      where: {id},
      include: [
          { 
            association: 'BlockCapabilities',
            attributes: ['id','name', 'description'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'BlockDependencies',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'DependentBlocks',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'ImplementedBy',
            attributes: ['id','name', 'description'],
            through: {
              attributes: []
            }
          }
        ],
    });

    return res.json(bb)

  },

  async create(req, res) {
    const { name, type, description } = req.body;

    const bb = await BuildingBlock.create({ name, type, description });

    return res.json(bb)
  },

  async addCap(req, res) {
    const { id } = req.params;
    const { caps } = req.body;

    const bb = await BuildingBlock.findByPk(id);

    await bb.setBlockCapabilities(caps);

    return res.json(bb)
  },

  async addDep(req, res) {
    const { id } = req.params;
    const { deps } = req.body;

    const bb = await BuildingBlock.findByPk(id);

    await bb.setBlockDependencies(deps);

    return res.json(bb)
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, type, description } = req.body;

    const bb = await BuildingBlock.findByPk(id);

    if(!bb) {
      return res.status(400).json({error: 'BB not found'});
    }

    await bb.update({ name, type, description });

    return res.json(bb);
  },

  async delete(req, res) {
    const { id } = req.params;

    const bb = await BuildingBlock.findByPk(id);

    if(!bb) {
        return res.status(400).json({error: 'BB not found'});
    }

    await bb.destroy({
        where: {
            id: id
        }
    });


    return res.status(204).send();
  },

}