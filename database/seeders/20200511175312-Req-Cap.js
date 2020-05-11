'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('RequirementsMatching', 
    [
      { id_capability: 2, id_requirement: 2 },
      { id_capability: 3, id_requirement: 4 },
      { id_capability: 4, id_requirement: 5 },
      { id_capability: 5, id_requirement: 1 },
      { id_capability: 8, id_requirement: 6 },
      { id_capability: 2, id_requirement: 1 },
      { id_capability: 3, id_requirement: 1 },
      { id_capability: 4, id_requirement: 1 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('RequirementsMatching', null, {}),
};