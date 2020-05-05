'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBImplementations', 
    [
      { id_bb: 10, id_bbi: 1 },
      { id_bb: 1, id_bbi: 5 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBImplementations', null, {}),
};