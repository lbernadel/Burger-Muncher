'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('burgers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      burger_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isEaten: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('burgers');
  }
}