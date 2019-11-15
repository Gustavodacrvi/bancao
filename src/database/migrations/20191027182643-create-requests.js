'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { id: {type: Sequelize.INTEGER, autoIncrement: true, allowNull:false}, client_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'clients',
          key:'id'
        },user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'users',
            key:'id'
          }, }, value_purchase:{type: Sequelize.DECIMAL(6, 2), allowNull:false}}});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('requests')
  }
};
