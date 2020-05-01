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
      },
      {
        reference: 'Req-6',
        description: 'Detection of Occupation',
      },
      {
        reference: 'Req-7',
        description: 'Small operating range',
      },
      {
        reference: 'Req-8',
        description: 'Medium operating range',
      },
      {
        reference: 'Req-9',
        description: 'Long operating range',
      },
      {
        reference: 'Req-10',
        description: 'Extreme operating range',
      },
      {
        reference: 'Req-11',
        description: 'High security',
      },
      {
        reference: 'Req-12',
        description: 'Privacy',
      },
      {
        reference: 'Req-13',
        description: 'Low cost',
      },
      {
        reference: 'Req-14',
        description: 'Cloud gateway',
      },
      {
        reference: 'Req-15',
        description: 'Data visualization',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Requirements', null, {}),
};