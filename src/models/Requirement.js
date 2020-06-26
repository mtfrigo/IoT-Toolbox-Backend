const  { Model, DataTypes } = require("sequelize");

class Requirement extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          reference: {
            type: DataTypes.STRING,
          },
          description: {
            type: DataTypes.STRING
            // allowNull defaults to true
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.Capability, { foreignKey: "id_requirement", through: 'RequirementsMatching', as: 'SolvedBy'});
      //this.belongsToMany(models.Mount, { foreignKey: "cap_id", through: 'mount_caps', as: 'mounts' });
      this.belongsToMany(models.Project, { foreignKey: "id_requirement", through: 'ProjectRequirements', as: "requirements"});
      
    }
}

module.exports = Requirement;
