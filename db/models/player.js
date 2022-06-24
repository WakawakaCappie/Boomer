'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Weapon }) {
      Player.hasMany(Weapon, { foreignKey: 'user_id' });
    }
  }
  Player.init({
    name: DataTypes.TEXT,
    bestScore: DataTypes.INTEGER,
    BestTimeOfPlay: DataTypes.INTEGER,
    killed: DataTypes.INTEGER,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};