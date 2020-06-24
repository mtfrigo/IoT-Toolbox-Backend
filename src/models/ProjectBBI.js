const  { Model, DataTypes } = require("sequelize");

class ProjectBBI extends Model {
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
      this.belongsTo(models.ProjectBB, { foreignKey: "id_project_bb"});
      this.belongsTo(models.BBI, { foreignKey: "id_bbi", as: 'bbi'});
    }
}

module.exports = ProjectBBI;
