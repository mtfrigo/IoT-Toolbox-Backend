const BuildingBlock = require("../models/BuildingBlock");
const BBI = require("../models/BBI");
const Artifact = require("../models/Artifact");
const Interface = require("../models/Interface");
const Dependency = require("../models/Dependency");

module.exports = {

  async index(req, res) {
    const bbis = await BBI.findAll({
      include: [
          { 
            association: 'Artifacts',
            attributes: ['id','filename', 'extension'],
            through: {
              attributes: []
            }
          },
          { 
            association: 'Interfaces',
            attributes: ['id','filename', 'extension'],
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

    bbis.map(bbi => {

      bbi.Artifacts.map(function(artifact) {
        artifact.generateUrl();
      })
  
      bbi.Interfaces.map(function(interfaceFile) {
        interfaceFile.generateUrl();
      })
    })
    return res.json(bbis)
  },

  async dependencies(req, res) {
    const deps = await Dependency.findAll();

    return res.json(deps)
  },

  async create(req, res) {
    const { name, description, deps, bbs, bbiDeps } = req.body;

    const bbi = await BBI.create({ name, description });

    await bbi.setBBIDependents(bbiDeps.split(',').map((item) => Number(item.trim())));
    await bbi.setBlockDependencies(deps.split(',').map((item) => Number(item.trim())));
    await bbi.setImplements(bbs.split(',').map((item) => Number(item.trim())));

    let artifactIds = [];
    for(let file of req.files.artifacts) {
      const artifact = await Artifact.create({ filename: file.filename, extension: file.filename.split('.')[1] });
      artifactIds.push(artifact.id);
    }
    await bbi.setArtifacts(artifactIds);

    let interfacesIds = [];
    for(let file of req.files.interfaces) {
      const interface = await Interface.create({ filename: file.filename, extension: file.filename.split('.')[1] });
      interfacesIds.push(interface.id);
    }

    console.log(interfacesIds)
    await bbi.setInterfaces(interfacesIds);

    const newBBI = await BBI.findOne({
      where: {id: bbi.id},
      include: [
        { 
          association: 'Artifacts',
          attributes: ['id','filename', 'extension'],
          through: {
            attributes: []
          }
        },
        { 
          association: 'Interfaces',
          attributes: ['id','filename', 'extension'],
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


    newBBI.Artifacts.map(function(artifact) {
      artifact.generateUrl();
    })

    newBBI.Interfaces.map(function(interfaceFile) {
      interfaceFile.generateUrl();
    })

   
    return res.json(newBBI);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, description, bbiDeps, deps, bbs, artifacts, interfaces } = req.body;

    const bbi = await BBI.findByPk(id);

    if(!bbi) {
      return res.status(400).json({error: 'BBI not found'});
    }

    await bbi.update({ name, description });
    await bbi.setBBIDependents(bbiDeps);
    await bbi.setBlockDependencies(deps);
    await bbi.setImplements(bbs);
    await bbi.setInterfaces(interfaces);
    await bbi.setArtifacts(artifacts);

    const newBBI = await BBI.findOne({
      where: {id: bbi.id},
      include: [
        { 
          association: 'Artifacts',
          attributes: ['id','filename', 'extension'],
          through: {
            attributes: []
          }
        },
        { 
          association: 'Interfaces',
          attributes: ['id','filename', 'extension'],
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

    newBBI.Artifacts.map(function(artifact) {
      artifact.generateUrl();
    })

    newBBI.Interfaces.map(function(interfaceFile) {
      interfaceFile.generateUrl();
    })

    return res.json(newBBI);
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