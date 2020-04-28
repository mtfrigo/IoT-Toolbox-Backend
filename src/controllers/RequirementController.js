const Requirement = require("../models/Requirement");

module.exports = {

  async index(req, res) {
    const requirements = await Requirement.findAll();

    return res.json(requirements)
  },

  async create(req, res) {
    const { reference, description } = req.body;

    const requirement = await Requirement.create({ reference, description });

    return res.json(requirement)
  }

}