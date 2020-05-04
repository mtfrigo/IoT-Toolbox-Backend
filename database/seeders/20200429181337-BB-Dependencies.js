'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBlocksDependencies', 
    [
      { id_bb: 2, id_dependent: 4 },
      { id_bb: 8, id_dependent: 9 },
      { id_bb: 9, id_dependent: 8 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBlocksDependencies', null, {}),
};