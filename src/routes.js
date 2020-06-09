
const express = require('express');

const multer = require("multer");
const multerConfig = require("./config/multer");

const publicRoutes = express.Router();
const authRoutes = express.Router();

const Sequelize = require('sequelize');

const authMiddleware = require('./middlewares/auth');

authRoutes.use(authMiddleware);


const sequelize = new Sequelize('iot_db', 'postgres', 'docker', {
  host: 'localhost',
  dialect: 'postgres'
});

const UserController = require('./controllers/UserController');
const RequirementController = require('./controllers/RequirementController');
const BuildingBlockController = require('./controllers/BuildingBlockController');
const MatchingController = require('./controllers/MatchingController');
const CapabilityController = require('./controllers/CapabilityController');
const BBIController = require('./controllers/BBIController');

const upload = multer(multerConfig);

// User
publicRoutes.get('/user', UserController.index);
publicRoutes.post('/user', UserController.create);
publicRoutes.post('/user/login', UserController.login);

// Capabilty
authRoutes.get('/capability', CapabilityController.index);
authRoutes.post('/capability', CapabilityController.create);
authRoutes.post('/capability/:id', CapabilityController.addReq);

//Requirement
authRoutes.get('/requirements', RequirementController.index);
authRoutes.get('/requirements/:id', RequirementController.get);
authRoutes.post('/requirements', RequirementController.create);
authRoutes.put('/requirements/:id', RequirementController.update);
authRoutes.delete('/requirements/:id', RequirementController.delete);

//BuildingBlock
authRoutes.get('/building-blocks', BuildingBlockController.index);
authRoutes.get('/building-blocks/:id', BuildingBlockController.get);
authRoutes.post('/building-blocks', BuildingBlockController.create);
authRoutes.put('/building-blocks/:id', BuildingBlockController.update);
authRoutes.post('/building-blocks/capability/:id', BuildingBlockController.addCap);
authRoutes.post('/building-blocks/dependency/:id', BuildingBlockController.addDep);
authRoutes.delete('/building-blocks/:id', BuildingBlockController.delete);

//BBI
authRoutes.get('/bbis', BBIController.index);
authRoutes.get('/bbis/:id', BBIController.show);
authRoutes.get('/bbis-dependencies', BBIController.dependencies);
// authRoutes.post('/bbis', upload.array('artifacts') , BBIController.create);
authRoutes.post('/bbis', upload.fields([{ name: 'artifactFiles' }, { name: 'interfaceFiles' }]) , BBIController.create);
authRoutes.put('/bbis/:id', upload.fields([{ name: 'artifactFiles' }, { name: 'interfaceFiles' }]), BBIController.update);
authRoutes.post('/bbi/dependents/:id', BBIController.addDependents);
authRoutes.post('/bbi/dependencies/:id', BBIController.addDependencies);
authRoutes.post('/bbi/implements/:id', BBIController.addImplemented);
authRoutes.delete('/bbis/:id', BBIController.delete);

//Matching
authRoutes.get('/matching', MatchingController.get);

module.exports = {
  authRoutes,
  publicRoutes
};