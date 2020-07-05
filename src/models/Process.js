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
          id_definition: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          id_deployment: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          id_instance: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          business_key: {
            type: DataTypes.STRING,
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
