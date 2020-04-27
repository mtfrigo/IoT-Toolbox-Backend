const User = require('../models/user');

module.exports = {

  async index(req, res) {


    const user = await User.findAll();

    return res.json(user)
  },

  async create(req, res) {
    const { firstName, lastName, email } = req.body;

    const user = await User.create({ firstName, lastName, email });

    return res.json(user)
  }

}