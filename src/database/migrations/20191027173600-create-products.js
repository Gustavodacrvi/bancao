'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', { id:{type: Sequelize.INTEGER, allowNull: false}, user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'}
      , name:{type: Sequelize.STRING, allowNull: false}, sell_price:{type: Sequelize.DOUBLE(6, 2), allowNull: false}, buy_price:{type: Sequelize.DOUBLE(6, 2), allowNull: false}, validated: {type: Sequelize.DATEONLY}});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
  }
};
