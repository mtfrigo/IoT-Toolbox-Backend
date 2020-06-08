'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Interfaces', 
    [
      {
        filename: 'oijaospdf-mqtt.py',
        extension: 'py',
      }
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Artifacts', null, {});
  },
};