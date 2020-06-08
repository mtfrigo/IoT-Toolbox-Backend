const  { Model, DataTypes } = require("sequelize");

class Artifact extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          filename: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          extension: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          fileUrl: {
            type: DataTypes.STRING,
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.BBI, { foreignKey: "id_artifact", through: 'BBiArtifacts'});
    }
}

Artifact.prototype.generateUrl = function() {
  this.fileUrl = `http://localhost:3332/uploads/artifacts/${this.filename}`;
};

module.exports = Artifact;
