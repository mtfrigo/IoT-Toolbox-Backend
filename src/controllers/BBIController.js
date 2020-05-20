const BuildingBlock = require("../models/BuildingBlock");
const BBI = require("../models/BBI");
const Dependency = require("../models/Dependency");

module.exports = {

  async index(req, res) {
    const bbis = await BBI.findAll({
      include: [
          { 
            association: 'Artifacts',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'Interfaces',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'Implements',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'BBIDependents',
            attributes: ['id','name'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'BBIDependencies',
            attributes: ['id','name'],
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
          }
        ],
    });

    return res.json(bbis)
  },

  async dependencies(req, res) {
    const deps = await Dependency.findAll();

    return res.json(deps)
  },

  async create(req, res) {
    const { name, description } = req.body;

    const bbi = await BBI.create({ name, description });

    return res.json(bbi)
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    const bbi = await BBI.findByPk(id);

    if(!bbi) {
      return res.status(400).json({error: 'BBI not found'});
    }

    await bbi.update({ name, description });

    return res.json(bbi);
  },

  async delete(req, res) {
    const { id } = req.params;

    const bbi = await BBI.findByPk(id);

    if(!bbi) {
      return res.status(400).json({error: 'BBI not found'});
    }

    await bbi.destroy({
        where: {
            id: id
        }
    });


    return res.status(204).send();
  },

  async addDependents(req, res) {
    const { id } = req.params;
    const { bbiDeps } = req.body;

    const bbi = await BBI.findByPk(id);

    await bbi.setBBIDependents(bbiDeps);

    return res.json(bbi)
  },

  async addDependencies(req, res) {
    const { id } = req.params;
    const { deps } = req.body;

    const bbi = await BBI.findByPk(id);

    await bbi.setBlockDependencies(deps);

    return res.json(bbi)
  },

  async addImplemented(req, res) {
    const { id } = req.params;
    const { bbs } = req.body;

    const bb = await BBI.findByPk(id);

    await bb.setImplements(bbs);

    return res.json(bb)
  },


}