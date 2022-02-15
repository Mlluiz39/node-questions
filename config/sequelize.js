const Sequelize = require('sequelize')
const configDB = require('./db')

const sequelize = new Sequelize(configDB)

module.exports = sequelize