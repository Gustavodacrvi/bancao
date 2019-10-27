'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', { id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    user_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'users',
        key:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    phone:{
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  }
};
