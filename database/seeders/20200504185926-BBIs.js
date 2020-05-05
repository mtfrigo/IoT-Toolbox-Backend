'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBIs', 
    [
      {
        name: 'XDK Light Sensor',
        description: 'XDK Bosch device with Light Sensor enabled.'
      },
      {
        name: 'XDK Light Sensor MQTT',
        description: 'XDK Bosch device with Light Sensor enabled and using MQTT communication.'
      },
      {
        name: 'XDK Light Sensor HTTP',
        description: 'XDK Bosch device with Light Sensor enabled and using HTTP communication.'
      },
      {
        name: 'XDK Light Sensor BLE',
        description: 'XDK Bosch device with Light Sensor enabled and using BLE communication.'
      },
      {
        name: 'Flower Care Plant Monitor',
        description: 'Flower Care™ speaks for plants, and accurate deliver all needs of every greenery & flowers at home, such as if the current moisture, sunlight, fertilizer and temperature are suitable for them or not, enable you to take care your plants nice and easy.'
      }
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('BBIs', null, {});
  },
};