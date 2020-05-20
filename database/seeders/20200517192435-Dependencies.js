'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Dependencies', 
    [
      {
        name: 'XDK Workbench 3.6.0',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Dependencies', null, {}),
};