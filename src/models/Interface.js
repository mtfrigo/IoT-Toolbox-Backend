const  { Model, DataTypes } = require("sequelize");

class Interface extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          reference: {
            type: Sequelize.STRING,
            allowNull: false,
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.BBI, { foreignKey: "id_interface", through: 'BBiInterfaces'});
    }
}

module.exports = Interface;
