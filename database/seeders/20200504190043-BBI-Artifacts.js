'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BBiArtifacts', 
    [
      { id_bbi: 2, id_artifact: 1 },
      { id_bbi: 3, id_artifact: 2 },
      { id_bbi: 4, id_artifact: 3 },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('BBiArtifacts', null, {}),
};