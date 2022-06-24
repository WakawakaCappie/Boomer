'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Player }) {
      Weapon.belongsTo(Player, { foreignKey: 'user_id' });
    }
  }
  Weapon.init({
    name: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};