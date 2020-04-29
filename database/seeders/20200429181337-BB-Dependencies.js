'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBlocksDependencies', 
    [
      { id_bb_1: 2, id_bb_2: 4 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBlocksDependencies', null, {}),
};