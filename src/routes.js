const express = require('express');
const routes = express.Router();

const Sequelize = require('sequelize');

/*
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});
*/

const sequelize = new Sequelize('iot_db', 'postgres', 'docker', {
  host: 'localhost',
  dialect: 'postgres'
});



const UserController = require('./controllers/UserController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

module.exports = routes;