'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BBlocksCapabilities', {
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
      id_capability: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Capabilities', key: 'id' },
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
    return queryInterface.dropTable('BBlocksCapabilities');
  }
};
