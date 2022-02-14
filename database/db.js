const Sequelize = require('sequelize')

const conn = new Sequelize('mlluizde_questions', 'mlluizde_mlluiz39', 'Julia2912@', {
  host: 'host10.hospedameusite.com.br',
  dialect: 'mysql'
})

module.exports = conn