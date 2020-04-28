'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Requirements', 
    [
      {
        reference: 'Req-1',
        description: 'Measure soil conditions',
      },
      {
        reference: 'Req-2',
        description: 'Measure temperature',
      },
      {
        reference: 'Req-3',
        description: 'Measure soil moisture',
      },
      {
        reference: 'Req-4',
        description: 'Measure luminosity',
      },
      {
        reference: 'Req-5',
        description: 'Measure humidity',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Requirements', null, {}),
};