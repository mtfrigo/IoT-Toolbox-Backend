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
            allowNull: true,
          },
          step_process: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          id_process: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "id_user"});
      this.belongsToMany(models.Requirement, { foreignKey: "id_project", through: 'ProjectRequirements', as: "Requirements"});
      this.hasMany(models.ProjectBB, { foreignKey: 'id_project', as: 'bbs'});
      this.belongsTo(models.Process, { foreignKey: 'id_process', as: 'Process'} );
    }
}

module.exports = Project;
