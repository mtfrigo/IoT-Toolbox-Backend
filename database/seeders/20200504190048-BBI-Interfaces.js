'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiInterfaces', 
    [
      { id_bbi: 2, id_interface: 1 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiInterfaces', null, {}),
};