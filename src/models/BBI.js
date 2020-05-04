const  { Model, DataTypes } = require("sequelize");

class BBI extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false
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
      this.belongsToMany(models.Artifact, { foreignKey: "id_bbi", through: 'BBiArtifacts', as: 'BBiArtifacts'});
      this.belongsToMany(models.Interface, { foreignKey: "id_bbi", through: 'BBiInterfaces', as: 'BBiInterfaces'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bbi", through: 'BBisDependents', as: 'Dependents'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bbi", through: 'BBiDependencies', as: 'Dependencies'});
    }
}

module.exports = BBI;
