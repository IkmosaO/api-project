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
        name: 'North America'
      },
      {
        name: 'Europe'
      },
      {
        name: 'Brazil'
      },
      {
        name: 'Latin America'
      },
      {
        name: 'Oceania'
      },
      {
        name: 'SEA'
      }
    ])

    return queryInterface.bulkInsert('teams', [
      {
        regionId: 1,
        name: 'eUnited',
        headCoach: 'Card1ac',
        sponsor: 'ASTRO Gaming',
        solo: 'Benji',
        mid: 'Baskin',
        jungle: 'Screammmmm',
        support: 'PolarBearMike',
        hunter: 'PandaCat'
      },
      {
        regionId: 1,
        name: 'Team RivaL',
        headCoach: 'AlphaJackal',
        sponsor: 'Esportsify',
        solo: 'Deathwalker',
        mid: 'Wlfy',
        jungle: 'iceicebabyy',
        support: 'KaLaS',
        hunter: 'Vote'
      },
      {
        regionId: 1,
        name: 'Obey Alliance',
        headCoach: 'Hayzer',
        sponsor: 'N/A',
        solo: 'Xaliea',
        mid: 'PrettyPriMe',
        jungle: 'CaptainTwig',
        support: 'EmilZy',
        hunter: 'Ataraxia'
      },
      {
        regionId: 2,
        name: 'NRG Esports',
        headCoach: 'Badgah',
        sponsor: 'Events DC',
        solo: 'maniaKK',
        mid: 'Homiefe',
        jungle: 'Adapting',
        support: 'iRaffer',
        hunter: 'emilitoo'
      },
      {
        regionId: 1,
        name: 'Elevate',
        headCoach: 'Navajo',
        sponsor: 'G Fuel',
        solo: 'N0Numbers',
        mid: 'DeathPanter',
        jungle: 'Cherryo',
        support: 'Dardez',
        hunter: 'Jermain'
      },
      {
        regionId: 3,
        name: 'Black Dragons',
        headCoach: 'aimless',
        sponsor: 'N/A',
        solo: 'Kliz',
        mid: 'Nann',
        jungle: 'oShip',
        support: 'PIBE',
        hunter: 'MarcelZ'
      },
      {
        regionId: 1,
        name: 'Luminosity Gaming',
        headCoach: 'N/A',
        sponsor: 'HyperX',
        solo: 'Aquarius',
        mid: 'Baskin',
        jungle: 'Mask',
        support: 'JeffHindla',
        hunter: 'BaRRaCCuDDa'
      },
      {
        regionId: 4,
        name: 'Nocturns Gaming',
        headCoach: 'N/A',
        sponsor: 'GX Gaming',
        solo: 'Beltway',
        mid: 'N0zq',
        jungle: 'Sm1tero',
        support: 'Noitulover',
        hunter: 'Zaionsix'
      },
      {
        regionId: 5,
        name: 'Scylla Esports',
        headCoach: 'N/A',
        sponsor: 'HyperX Gaming',
        solo: 'Kayo',
        mid: 'Shred',
        jungle: 'Envisionise',
        support: 'Torreyskiez',
        hunter: 'MingyuSeo '
      },
      {
        regionId: 6,
        name: 'Entity Gaming',
        headCoach: 'N/A',
        sponsor: 'ASUS',
        solo: 'Parad1ddle',
        mid: 'SirEclipse',
        jungle: 'iApex',
        support: 'MashuPoi',
        hunter: 'Kamiru'
      }
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
