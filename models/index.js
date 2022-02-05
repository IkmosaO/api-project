const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const RegionsModel = require('./regions')
const TeamsModel = require('./teams')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Regions = RegionsModel(connection, Sequelize)
const Teams = TeamsModel(connection, Sequelize, Regions)

Regions.hasMany(Teams)
Teams.belongTo(Regions)


module.exports = {
  Regions,
  Teams,
  Op: Sequelize.Op
}
