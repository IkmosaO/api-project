const Teams = (connection, Sequelize, Regions) => {
  return connection.define('teams', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    regionId: { type: Sequelize.INTEGER, references: { model: Regions, key: 'id' } },
    name: { type: Sequelize.STRING, allowNull: false },
    headCoach: { type: Sequelize.STRING, allowNull: false, defaultValue: 'N/A' },
    sponsor: { type: Sequelize.STRING, allowNull: false, defaultValue: 'N/A' },
    solo: { type: Sequelize.STRING, allowNull: false },
    mid: { type: Sequelize.STRING, allowNull: false },
    jungle: { type: Sequelize.STRING, allowNull: false },
    support: { type: Sequelize.STRING, allowNull: false },
    hunter: { type: Sequelize.STRING, allowNull: false }
  }, { paranoid: true })
}

module.exports = Teams
