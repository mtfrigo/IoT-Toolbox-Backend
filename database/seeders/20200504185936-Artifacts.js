'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Artifacts', 
    [
      {
        filename: 'oijaospdf-mqtt.py',
        extension: 'py',
      }, 
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Artifacts', null, {});
  },
};