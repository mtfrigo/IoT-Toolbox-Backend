'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Artifacts', 
    [
      {
        name: 'XDK Light Sensor MQTT',
        type: 'Binary Application',
        reference: 'some url ou path',
      },{
        name: 'XDK Light Sensor HTTP',
        type: 'Binary Application',
        reference: 'some url ou path',
      },
      {
        name: 'XDK Light Sensor BLE',
        type: 'Binary Application',
        reference: 'some url ou path',
      },
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Artifacts', null, {});
  },
};