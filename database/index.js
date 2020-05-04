const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/database');

//Import models
const User = require('../src/models/User');
const Requirement = require('../src/models/Requirement');
const Capability = require('../src/models/Capability');
const BuildingBlock = require('../src/models/BuildingBlock');

const connection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect 
});


//Init models
User.init(connection);
Requirement.init(connection);
BuildingBlock.init(connection);
Capability.init(connection);



//Init asssociations of models
User.associate(connection.models);
Requirement.associate(connection.models);
BuildingBlock.associate(connection.models);
Capability.associate(connection.models);


module.exports = connection;