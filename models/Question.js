const Sequelize = require('sequelize')
const connection = require('../database/db')

const Question = connection.define('perguntas', {
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