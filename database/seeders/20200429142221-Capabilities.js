'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Capabilities', 
    [
      {
        name: 'Loose Coupling',
        description: 'Loose coupling is a approach to interconnecting the components in a system or network so that those components depend on each other to the least extent practicable.',
      },
      {
        name: 'Sensing of temperature',
        description: 'Enables temperature measurement.',
      },
      {
        name: 'Sensing of light intensity',
        description: 'Enables limunosity measurement.',
      },
      {
        name: 'Sensing of humidity',
        description: 'Enables humidity measurement.',
      },
      {
        name: 'Sensing of soil moisture',
        description: 'Enables soil moisture measurement.',
      },
      {
        name: 'Sensing of distance',
        description: 'Enables distance measurement.',
      },
      {
        name: 'Sensing of motion',
        description: 'Enables detection of motion.',
      },
      {
        name: 'Sensing of occupancy',
        description: 'Enables detection of occupancy.',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Capabilities', null, {}),
};