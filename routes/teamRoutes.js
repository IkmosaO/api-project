const express = require('express')

const teamControllers = require('../controllers/teamControllers')
const router = express.Router()


router.get('/', teamControllers.getAllTeams)

router.get('/:id', teamControllers.getTeamById)

router.post('/', teamControllers.createNewTeam)

router.put('/:id', teamControllers.updateTeam)

router.delete('/:id', teamControllers.deleteTeamById)

module.exports = router
