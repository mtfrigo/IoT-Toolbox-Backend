const express = require('express');
const routes = express.Router();

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const UserController = require('./controllers/UserController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

module.exports = routes;