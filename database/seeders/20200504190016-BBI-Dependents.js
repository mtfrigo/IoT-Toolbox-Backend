'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBisDependents', 
    [
      { id_bbi: 1, id_bbi_dependent: 2 },
      { id_bbi: 1, id_bbi_dependent: 3 },
      { id_bbi: 1, id_bbi_dependent: 4 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBisDependents', null, {}),
};