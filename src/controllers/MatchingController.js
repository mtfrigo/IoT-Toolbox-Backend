const Capability = require("../models/Capability");
const Requirement = require("../models/Requirement");
const BuildingBlock = require("../models/BuildingBlock");

const  { Op } = require("sequelize");

module.exports = {

    async get(req, res) {
      const { requirements } = req.query;

      let parsedRequirements = [];
      if(requirements)
       parsedRequirements = requirements.map(item => Number(item.trim()))

      const reqs = await Requirement.findAll({
        where: {
          id: {
            [Op.in]: parsedRequirements
          }
        },
        include: [
            { 
              association: 'SolvedBy',
              attributes: ['id'],
              through: {
                attributes: []
              }
            }
          ],
      });

    let id_caps = []

    reqs.map((req) => {
      for(let cap of req.SolvedBy) {
        if(!id_caps.includes(cap['id'])) id_caps.push(cap['id'])
      }
    })

    const caps = await Capability.findAll({
      where: {
        id: {
          [Op.in]: id_caps
        }
      },
      include: [
        { 
          association: 'CapableBlocks',
          attributes: ['id', 'name'],
          through: {
            attributes: []
          }
        }
      ],
    });

    let id_bbs = []

    caps.map((cap) => {
      for(let bb of cap.CapableBlocks) {
        if(!id_bbs.includes(bb['id'])) id_bbs.push(bb['id'])
      }
    })


    const bbs = await BuildingBlock.findAll({
      where: {
        id: {
          [Op.in]: id_bbs
        }
      },
      
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

  }

}