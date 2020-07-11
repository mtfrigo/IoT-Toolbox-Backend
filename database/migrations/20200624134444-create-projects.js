'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_process: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'Processes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      step: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      step_process: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};
