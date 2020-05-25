const Capability = require("../models/Capability");

module.exports = {

  async index(req, res) {
    const capabilities = await Capability.findAll({
      include: [
          { 
            association: 'Solves',
            attributes: ['id', 'description'],
            through: {
              attributes: []
            }
          }
        ],
    });

    return res.json(capabilities)
  },

  async addReq(req, res) {
    const { id } = req.params;
    const { requirements } = req.body;

    const capability = await Capability.findByPk(id);

    if(!capability) {
        return res.status(400).json({error: 'Capability not found'});
    }

    await capability.setSolves(requirements);

    return res.json(capability)
  },

  async create(req, res) {
    const { name, description } = req.body;

    const capability = await Capability.create({ name, description });

    return res.json(capability)
  }

}