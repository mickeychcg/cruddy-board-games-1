'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    players: DataTypes.INTEGER
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};