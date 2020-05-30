const User = require("../models/User");

module.exports = {

  async index(req, res) {
    const user = await User.scope('withoutPassword').findAll();

    return res.json(user)
  },

  async create(req, res) {
    const { username, password, email, role } = req.body;

    const check = await User.findOne({
      where: {username}
    })

    if(check) {
      return res.status(400).json({error: 'User already registered'});
    }

    const user = await User.create({ username, password, email, role });

    user.password = undefined;

    const token = user.generateToken();

    return res.json({user, token})
  },

  async login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {username}
    })


    if(!user) {
      return res.status(400).json({error: 'User not found'});
    } else if(!user.validPassword(password)) {
      return res.status(400).json({error: 'Wrong password'});
    } 

    user.password = undefined;

    const token = user.generateToken();

    return res.json({user, token})
  }

}