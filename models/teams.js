const Teams = (connection, Sequelize, Regions) => {
  return connection.define('teams', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    regionsId: { type: Sequelize.INTEGER, references: { model: Regions, key: 'id' } },
    name: { type: Sequelize.STRING, allowNull: false },
    headCoach: { type: Sequelize.STRING, allowNull: false },
    sponsors: { type: Sequelize.STRING, allowNull: false },
    solo: { type: Sequelize.STRING, allowNull: false },
    mid: { type: Sequelize.STRING, allowNull: false },
    jungle: { type: Sequelize.STRING, allowNull: false },
    support: { type: Sequelize.STRING, allowNull: false },
    hunter: { type: Sequelize.STRING, allowNull: false }
  }, { paranoid: true })
}

module.exports = Teams
