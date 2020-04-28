const  { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          email: {
            type: DataTypes.STRING
            // allowNull defaults to true
          }}, {
            sequelize
        })
    }

    static associate(models) {
        //this.belongsToMany(models.Mount, { foreignKey: "cap_id", through: 'mount_caps', as: 'mounts' });
    }
}

module.exports = User;
