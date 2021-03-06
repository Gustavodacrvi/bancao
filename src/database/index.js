const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../models/User')
const Client = require('../models/Client')
const connection = new Sequelize(dbConfig)

User.init(connection)
Client.init(connection)
User.associate(connection.models)
Client.associate(connection.models)

module.exports = connection