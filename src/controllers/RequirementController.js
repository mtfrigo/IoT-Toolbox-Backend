const Requirement = require("../models/Requirement");

module.exports = {

  async index(req, res) {
    const requirements = await Requirement.findAll();

    return res.json(requirements)
  },


  async get(req, res) {
    const { id } = req.params;
    const requirement = await Requirement.findByPk(id);

    return res.json(requirement)
  },

  async create(req, res) {
    const { reference, description } = req.body;

    const requirement = await Requirement.create({ reference, description });

    return res.json(requirement)
  },

  async update(req, res) {
    const { id } = req.params;
    const { reference, description } = req.body;

    const requirement = await Requirement.findByPk(id);

    if(!requirement) {
        return res.status(400).json({error: 'Requirement not found'});
    }

    await requirement.update({ reference, description });

    return res.json(requirement);
  },

  async delete(req, res) {
    const { id } = req.params;

    const requirement = await Requirement.findByPk(id);

    if(!requirement) {
        return res.status(400).json({error: 'Requirement not found'});
    }

    await requirement.destroy({
        where: {
            id: id
        }
    });


    return res.status(204).send();
  },


}