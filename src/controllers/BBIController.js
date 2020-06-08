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

    await bbi.setBBIDependents(bbiDeps ? bbiDeps.split(',').map((item) => Number(item.trim())) : []);
    await bbi.setBlockDependencies(deps ? deps.split(',').map((item) => Number(item.trim())) : []);
    await bbi.setImplements(bbs ? bbs.split(',').map((item) => Number(item.trim())) : []);

    let artifactIds = [];
    if(req.files.artifactFiles){
      for(let file of req.files.artifactFiles) {
        const artifact = await Artifact.create({ filename: file.filename, extension: file.filename.split('.')[1] });
        artifactIds.push(artifact.id);
      }
    }
    await bbi.setArtifacts(artifactIds);

    let interfacesIds = [];
    if(req.files.interfaceFiles){
      for(let file of req.files.interfaceFiles) {
        const interface = await Interface.create({ filename: file.filename, extension: file.filename.split('.')[1] });
        interfacesIds.push(interface.id);
      }
    }
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

    let artifactIds = [];
    if(req.files.artifactFiles){
      for(let file of req.files.artifactFiles) {
        const artifact = await Artifact.create({ filename: file.filename, extension: file.filename.split('.')[1] });
        artifactIds.push(artifact.id);
      }
    }

    if(artifacts)
      artifactIds = artifacts.split(',').map((item) => Number(item.trim())).concat(artifactIds);
    
    let interfacesIds = [];
    if(req.files.interfaceFiles) {
      for(let file of req.files.interfaceFiles) {
        const interface = await Interface.create({ filename: file.filename, extension: file.filename.split('.')[1] });
        interfacesIds.push(interface.id);
      }
    }
    
    if(interfaces)
      interfacesIds = interfaces.split(',').map((item) => Number(item.trim())).concat(interfacesIds);

    await bbi.update({ name, description });
    await bbi.setBBIDependents(bbiDeps ? bbiDeps.split(',').map((item) => Number(item.trim())) : []);
    await bbi.setBlockDependencies(deps ? deps.split(',').map((item) => Number(item.trim())): []);
    await bbi.setImplements(bbs ? bbs.split(',').map((item) => Number(item.trim())): []);
    await bbi.setInterfaces(interfacesIds);
    await bbi.setArtifacts(artifactIds);

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