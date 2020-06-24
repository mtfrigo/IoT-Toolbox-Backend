'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectBBIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_project_bb: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'ProjectBBs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_bbi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'BBIs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      selectionType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instanceId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      parentId: {
        allowNull: true,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('ProjectBBIs');
  }
};
