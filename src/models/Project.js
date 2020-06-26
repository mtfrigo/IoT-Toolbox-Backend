const  { Model, DataTypes } = require("sequelize");

class Project extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          step: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "id_user"});
      this.belongsToMany(models.Requirement, { foreignKey: "id_project", through: 'ProjectRequirements', as: "Requirements"});
      this.hasMany(models.ProjectBB, { foreignKey: 'id_project', as: 'bbs'});
    }
}

module.exports = Project;
