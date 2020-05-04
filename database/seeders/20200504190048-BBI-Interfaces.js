'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiInterfaces', 
    [
      { id_bbi: 2, id_interface: 1 },
      { id_bbi: 3, id_interface: 2 },
      { id_bbi: 4, id_interface: 3 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiInterfaces', null, {}),
};