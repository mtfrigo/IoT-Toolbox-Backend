'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Dependencies', 
    [
      {
        name: 'XDK Workbench 3.6.0',
      },
      {
        name: 'Python 3',
      },
      {
        name: 'Python 2.7',
      },
      {
        name: 'jdk',
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Dependencies', null, {}),
};