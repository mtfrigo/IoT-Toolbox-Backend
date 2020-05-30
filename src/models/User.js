const  { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');


class User extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          role: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          }}, {
            sequelize,
            hooks: {
              beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
              }
            },
            scopes: {
              withoutPassword: {
                attributes: { exclude: ['password'] }
              }
            }
        })
    }

    static associate(models) {
        //this.belongsToMany(models.Mount, { foreignKey: "cap_id", through: 'mount_caps', as: 'mounts' });
    }
}

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id, role: this.role}, authConfig.secret, {
      expiresIn: 86400
    })
};

module.exports = User;
