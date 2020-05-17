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
const MatchingController = require('./controllers/MatchingController');
const CapabilityController = require('./controllers/CapabilityController');


// User
routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

// Capabilty
routes.get('/capability', CapabilityController.index);
routes.post('/capability', CapabilityController.create);

//Requirement
routes.get('/requirements', RequirementController.index);
routes.post('/requirements', RequirementController.create);
routes.put('/requirements/:id', RequirementController.update);
routes.delete('/requirements/:id', RequirementController.delete);

//BuildingBlock
routes.get('/building-blocks', BuildingBlockController.index);
routes.get('/building-blocks/:id', BuildingBlockController.get);
routes.post('/building-blocks', BuildingBlockController.create);
routes.put('/building-blocks/:id', BuildingBlockController.update);
routes.post('/bb-capability/:id', BuildingBlockController.addCap);
routes.post('/bb-dependency/:id', BuildingBlockController.addDep);
routes.delete('/building-blocks/:id', BuildingBlockController.delete);

//Matching
routes.get('/matching', MatchingController.get);


module.exports = routes;