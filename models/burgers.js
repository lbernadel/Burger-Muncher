'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false},
    isEaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});

  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};