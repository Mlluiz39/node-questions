const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Answer = sequelize.define('respostas', {
 body: {
 type: Sequelize.TEXT,
 allowNull: false  
 },
 questionId: {
 type: Sequelize.INTEGER,
 allowNull: false  
 }
})

Answer.sync({ force: false })

module.exports = Answer