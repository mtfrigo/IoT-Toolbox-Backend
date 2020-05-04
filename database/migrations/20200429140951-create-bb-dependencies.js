'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BBlocksDependencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_bb: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'BuildingBlocks', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_dependent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'BuildingBlocks', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('BBlocksDependencies');
  }
};
