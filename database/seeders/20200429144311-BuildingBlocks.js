'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BuildingBlocks', 
    [
      {
        name: 'Plant Sensor',
        type: 'Sensor',
        description: 'Sensor to measure soil conditions.',
      },
      {
        name: 'Loose Coupling',
        type: 'Communication',
        description: 'Loosely coupled communication',
      },
      {
        name: 'Ultrasonic Sensor HC-SR04',
        type: 'Sensor',
        description: 'The ultrasonic sensor uses sonar to determine the distance to an object.',
      },
      {
        name: 'BLE Hotspot',
        type: 'Gateway',
        description: 'Gateway that allows BLE devices connect to the network.',
      },
      {
        name: 'WiFI router',
        type: 'Gateway',
        description: 'Gateway that allows WiFi devices connect to the network.',
      },
      {
        name: 'IoT Platform',
        type: 'Gateway',
        description: 'Gateway that allows WiFi devices connect to the network.',
      },
      {
        name: 'Occupancy sensor',
        type: 'Sensor',
        description: 'Sensor for detection of occupancy.',
      },
      {
        name: 'LoRa sender',
        type: 'Gateway',
        description: 'LoRa sender',
      },
      {
        name: 'LoRa receiver',
        type: 'Gateway',
        description: 'LoRa receiver',
      },
      {
        name: 'Light Sensor',
        type: 'Sensor',
        description: 'Sensor that measures luminosity.',
      },
    ], {}),
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('BuildingBlocks', null, {});
  },
};