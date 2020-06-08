'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiArtifacts', 
    [
      { id_bbi: 2, id_artifact: 1 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiArtifacts', null, {}),
};