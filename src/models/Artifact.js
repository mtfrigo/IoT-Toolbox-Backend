const  { Model, DataTypes } = require("sequelize");

class Artifact extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          reference: {
            type: DataTypes.STRING,
            allowNull: false,
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.BBI, { foreignKey: "id_artifact", through: 'BBiArtifacts'});
    }
}

module.exports = Artifact;
