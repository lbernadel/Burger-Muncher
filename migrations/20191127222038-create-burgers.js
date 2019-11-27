'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: Sequelize.STRING,
      isEaten: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('burgers');
  }
}