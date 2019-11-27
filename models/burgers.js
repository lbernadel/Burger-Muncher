'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    burger_name: DataTypes.STRING,
    isEaten: DataTypes.BOOLEAN
  }, {});

  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};