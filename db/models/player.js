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
    name: {
      type: DataTypes.TEXT,
    },
    bestScore: {
      type: DataTypes.INTEGER,
    },
    BestTimeOfPlay: {
      type: DataTypes.INTEGER,
    },
    killed: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};