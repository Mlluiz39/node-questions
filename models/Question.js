const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Question = sequelize.define('perguntas', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
   type: Sequelize.TEXT,
   allowNull: false
  }  
})

Question.sync({force: false}).then(() => {
  console.log('Tabela criada com sucesso')
})

module.exports = Question