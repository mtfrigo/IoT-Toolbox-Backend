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
          icon: {
            type: DataTypes.STRING,
            allowNull: true
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.Artifact, { foreignKey: "id_bbi", through: 'BBiArtifacts'});
      this.belongsToMany(models.Interface, { foreignKey: "id_bbi", through: 'BBiInterfaces'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bbi", through: 'BBisDependents', as: 'Dependents'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bbi", through: 'BBiDependencies', as: 'Dependencies'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_bbi", through: 'BBImplementations', as: 'Implements'});
    }
} 

module.exports = BBI;
