'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBIs', 
    [
      {
        name: 'XDK Light Sensor',
      },
      {
        name: 'XDK Light Sensor MQTT',
      },
      {
        name: 'XDK Light Sensor HTTP',
      },
      {
        name: 'XDK Light Sensor BLE',
      }
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('BBIs', null, {});
  },
};