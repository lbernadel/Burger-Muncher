'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', {
    burger_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
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