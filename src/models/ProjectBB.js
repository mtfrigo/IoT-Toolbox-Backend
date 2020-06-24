const  { Model, DataTypes } = require("sequelize");

class ProjectBB extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          selectionType: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          instanceId: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          parentId: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsTo(models.Project, { foreignKey: "id_project"});
      this.belongsTo(models.BuildingBlock, { foreignKey: "id_bb", as: 'bb'});
      this.hasMany(models.ProjectBBI, { foreignKey: 'id_project_bb', as: 'bbis'});
    }
}


module.exports = ProjectBB;
