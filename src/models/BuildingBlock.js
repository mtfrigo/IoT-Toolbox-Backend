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
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_bb", through: 'BBlocksDependencies', as: 'BlockDependencies'});
      this.belongsToMany(models.BuildingBlock, { foreignKey: "id_dependent", through: 'BBlocksDependencies', as: 'DependentBlocks'});
      this.belongsToMany(models.BBI, { foreignKey: "id_bb", through: 'BBImplementations', as: 'ImplementedBy'});
      this.belongsToMany(models.Project, { foreignKey: "id_bb", through: 'ProjectBBs', as: "Projects"});
    }
}

module.exports = BuildingBlock;
