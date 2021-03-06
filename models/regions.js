const Regions = (connection, Sequelize) => {
  return connection.define('regions', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
  }, { paranoid: true })
}

module.exports = Regions

