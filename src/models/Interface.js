const  { Model, DataTypes } = require("sequelize");

class Interface extends Model {
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
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.BBI, { foreignKey: "id_interface", through: 'BBiInterfaces'});
    }
}

Interface.prototype.generateUrl = function() {
  this.fileUrl = `http://localhost:3332/uploads/interfaces/${this.filename}`;
};

module.exports = Interface;
