'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Processes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_definition: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_instance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_deployment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      business_key: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      resource: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Processes');
  }
};
