const Capabilty = require("../models/Capability");

module.exports = {

  async index(req, res) {
    const capabilities = await Capabilty.findAll();

    return res.json(capabilities)
  },

  async create(req, res) {
    const { name, description } = req.body;

    const capability = await Capabilty.create({ name, description });

    return res.json(capability)
  }

}