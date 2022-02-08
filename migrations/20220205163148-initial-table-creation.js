module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('regions', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('teams', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      regionId: { type: Sequelize.INTEGER, references: { model: 'regions', key: 'id' } },
      name: { type: Sequelize.STRING, allowNull: false },
      headCoach: { type: Sequelize.STRING, allowNull: false, defaultValue: 'N/A' },
      sponsor: { type: Sequelize.STRING, allowNull: false, defaultValue: 'N/A' },
      solo: { type: Sequelize.STRING, allowNull: false },
      mid: { type: Sequelize.STRING, allowNull: false },
      jungle: { type: Sequelize.STRING, allowNull: false },
      support: { type: Sequelize.STRING, allowNull: false },
      hunter: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('teams')

    return queryInterface.dropTable('regions')
  }
}
