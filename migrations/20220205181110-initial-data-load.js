module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('regions', [
      {
        name: 'Australia'
      },
      {
        name: 'China'
      },
      {
        name: 'SEA'
      },
      {
        name: 'Mediterranean'
      }
    ])

    return queryInterface.bulkInsert('teams', [
      {
        regionsId: 1,
        name: 'Team One',
        headCoach: 'Team One Coach',
        sponsors: 'Team One Sponsor',
        solo: 'Team One Solo',
        mid: 'Team One Mid',
        jungle: 'Team One Jungle',
        support: 'Team One Support',
        hunter: 'Team One Hunter'
      },
      {
        regionsId: 2,
        name: 'Team Two',
        headCoach: 'Team Two Coach',
        sponsors: 'Team Two Sponsor',
        solo: 'Team Two Solo',
        mid: 'Team Two Mid',
        jungle: 'Team Two Jungle',
        support: 'Team Two Support',
        hunter: 'Team Two Hunter'
      },
      {
        regionsId: 3,
        name: 'Team Three',
        headCoach: 'Team Three Coach',
        sponsors: 'Team Three Sponsor',
        solo: 'Team Three Solo',
        mid: 'Team Three Mid',
        jungle: 'Team Three Jungle',
        support: 'Team Three Support',
        hunter: 'Team Three Hunter'
      },
      {
        regionsId: 4,
        name: 'Team Four',
        headCoach: 'Team Four Coach',
        sponsors: 'Team Four Sponsor',
        solo: 'Team Four Solo',
        mid: 'Team Four Mid',
        jungle: 'Team Four Jungle',
        support: 'Team Four Support',
        hunter: 'Team Four Hunter'
      },
    ])
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('teams')

    return queryInterface.bulkDelete('regions')
  }
}
