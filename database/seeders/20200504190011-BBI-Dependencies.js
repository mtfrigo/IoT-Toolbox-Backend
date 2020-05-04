'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiDependencies', 
    [
      { id_bbi: 1, dependency: 'XDK Workbench 3.6' },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiDependencies', null, {}),
};