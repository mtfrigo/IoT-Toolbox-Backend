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
const RequirementController = require('./controllers/RequirementController');
const BuildingBlockController = require('./controllers/BuildingBlockController');


// User
routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

//Requirement
routes.get('/requirements', RequirementController.index);
routes.post('/requirements', RequirementController.create);

//BuildingBlock
routes.get('/building-blocks', BuildingBlockController.index);


module.exports = routes;