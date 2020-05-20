const  { Model, DataTypes } = require("sequelize");

class Dependency extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false
          }}, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.BBI, { foreignKey: "id_dependency", through: 'BBiDependencies'});
    }
}

module.exports = Dependency;
