'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBlocksDependencies', 
    [
      { id_bb_1: 2, id_bb_2: 4 },
      { id_bb_1: 8, id_bb_2: 9 },
      { id_bb_1: 9, id_bb_2: 8 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBlocksDependencies', null, {}),
};