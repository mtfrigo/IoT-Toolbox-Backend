'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
    [
      {
        username: 'admin',
        email: 'admin@teste.com',
        password: 'admin',
      },
      {
        username: 'mtfrigo',
        email: 'matheus.tfrigo@gmail.com',
        password: 'teste',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
