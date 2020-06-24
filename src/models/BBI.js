const  { Model, DataTypes } = require("sequelize");

class BBI extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.Artifact, { foreignKey: "id_bbi", through: 'BBiArtifacts'});
      this.belongsToMany(models.Interface, { foreignKey: "id_bbi", through: 'BBiInterfaces'});

      this.belongsToMany(models.BBI, { foreignKey: "id_bbi", through: 'BBisDependents', as: 'BBIDependents'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bbi_dependent", through: 'BBisDependents', as: 'BBIDependencies'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_bbi", through: 'BBImplementations', as: 'Implements'});
      this.belongsToMany(models.Dependency, { foreignKey: "id_bbi", through: 'BBiDependencies', as: 'BlockDependencies'});
      this.belongsToMany(models.ProjectBBI, { foreignKey: "id_bbi", through: 'ProjectBBs', as: "BBIs"});
    }
} 

module.exports = BBI;
