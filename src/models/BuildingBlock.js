const  { Model, DataTypes } = require("sequelize");

class BuildingBlock extends Model {
    static init(sequelize) {
        super.init({
          // attributes
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.STRING,

          },
          icon: {
            type: DataTypes.STRING,
            allowNull: true
          }
        }, {
            sequelize
        })
    }

    static associate(models) {
      //this.belongsToMany(models.BuildingBlock, { foreignKey: "cap_id", through: 'B', as: 'mounts' });
      this.belongsToMany(models.Capability, { foreignKey: "id_bb", through: 'BBlocksCapabilities', as: 'BlockCapabilities'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_bb_1", through: 'BBlocksDependencies', as: 'BlockDependencies'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_bb_2", through: 'BBlocksDependencies', as: 'DependentBlocks'});
    }
}

module.exports = BuildingBlock;
