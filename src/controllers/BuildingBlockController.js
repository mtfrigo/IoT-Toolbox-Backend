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
          }
        ],
    });

    return res.json(bbs)
  },

}