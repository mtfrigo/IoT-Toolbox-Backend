'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Interfaces', 
    [
      {
        name: 'XDK Light Sensor MQTT',
        reference: 'some url ou path',
      },{
        name: 'XDK Light Sensor HTTP',
        reference: 'some url ou path',
      },
      {
        name: 'XDK Light Sensor BLE',
        reference: 'some url ou path',
      },
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Artifacts', null, {});
  },
};