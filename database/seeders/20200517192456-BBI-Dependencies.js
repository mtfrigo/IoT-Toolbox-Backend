'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiDependencies', 
    [
      { id_bbi: 1, id_dependency: 1 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiDependencies', null, {}),
};