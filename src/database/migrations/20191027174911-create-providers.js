'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { id: {type:Sequelize.INTEGER, allowNull: false, autoIncrement: true} ,user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },name:{type:Sequelize.STRING, allowNull: false}, phone: Sequelize.STRING, email: Sequelize.STRING});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('providers');
  }
};
