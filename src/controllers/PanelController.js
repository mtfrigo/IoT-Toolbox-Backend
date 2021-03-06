const BuildingBlock = require("../models/BuildingBlock");
const BBI = require("../models/BBI");
const Requirement = require("../models/Requirement");
const Artifact = require("../models/Artifact");
const Interface = require("../models/Interface");
const Dependency = require("../models/Dependency");
const Project = require("../models/Project");

module.exports = {

  async index(req, res) {

    const bbCounter = await BuildingBlock.count();
    const bbiCounter = await BBI.count();
    const reqCounter = await Requirement.count();
    const projectCounter = await Project.count();

    return res.json({BBs: bbCounter, BBIs: bbiCounter, Requirements: reqCounter, Projects: projectCounter})
  },

}