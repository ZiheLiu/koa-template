const Sequelize = require('sequelize')
const config = require('./config')

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

module.exports = sequelize
