const  { Model, DataTypes } = require("sequelize");

class Process extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          key: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          version: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          id_deployment: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          resource: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.hasOne(models.Project, { foreignKey: "id_process"});
    }
}

module.exports = Process;
