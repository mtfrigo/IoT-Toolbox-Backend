'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBlocksCapabilities', 
    [
      { id_bb: 2, id_capability: 1 },
      { id_bb: 1, id_capability: 2 },
      { id_bb: 1, id_capability: 4 },
      { id_bb: 1, id_capability: 5 },
      { id_bb: 3, id_capability: 6 },
      { id_bb: 7, id_capability: 8 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBlocksCapabilities', null, {}),
};