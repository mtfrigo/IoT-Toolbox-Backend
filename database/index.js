const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/database');

//Import models
const User = require('../src/models/User');
const Requirement = require('../src/models/Requirement');
const Capability = require('../src/models/Capability');
const BuildingBlock = require('../src/models/BuildingBlock');
const BBi = require('../src/models/BBI');
const Artifact = require('../src/models/Artifact');
const Interface = require('../src/models/Interface');
const Dependency = require('../src/models/Dependency');
const Project = require('../src/models/Project');
const ProjectBB = require('../src/models/ProjectBB');
const ProjectBBI = require('../src/models/ProjectBBI');

const connection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect 
});


//Init models
User.init(connection);
Requirement.init(connection);
BuildingBlock.init(connection);
Capability.init(connection);
Interface.init(connection);
Artifact.init(connection);
Dependency.init(connection);
BBi.init(connection);
Project.init(connection);
ProjectBB.init(connection);
ProjectBBI.init(connection);

//Init asssociations of models
User.associate(connection.models);
Requirement.associate(connection.models);
BuildingBlock.associate(connection.models);
Capability.associate(connection.models);
Interface.associate(connection.models);
Artifact.associate(connection.models);
Dependency.associate(connection.models);
BBi.associate(connection.models);
Project.associate(connection.models);
ProjectBB.associate(connection.models);
ProjectBBI.associate(connection.models);

module.exports = connection;