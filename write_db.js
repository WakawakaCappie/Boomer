const { run } = require('jest');
const { sequelize } = require('sequelize');
const { Gamer } = require('./db/models');

  const saveName = async (name, score) => {
  await Gamer.create({
    gamer_name: name,
    score: score,
  });
}
module.exports = {saveName};