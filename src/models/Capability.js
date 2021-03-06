const  { Model, DataTypes } = require("sequelize");

class Capability extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      this.belongsToMany(models.Requirement, { foreignKey: "id_capability", through: 'RequirementsMatching', as: 'Solves'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_capability", through: 'BBlocksCapabilities', as: 'CapableBlocks'});
    }
}

module.exports = Capability;
