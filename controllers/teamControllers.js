/* eslint-disable max-len */
/* eslint-disable no-console */
const models = require('../models')

const getAllTeams = async (request, response) => {
  try {
    const getAllTeams = await models.Teams.findAll()

    return response.status(200).send(getAllTeams)
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error trying to retrieve team list, please try again')
  }
}


const getTeamById = async (request, response) => {
  try {
    const { id } = request.params

    const getTeamById = await models.Teams.findOne({
      where: { id }
    })

    return getTeamById
      ? response.send(getTeamById)
      : response.status(404).send('No team found, please try again')
  } catch (e) {
    return response.status(500).send('Error trying to retrieve team, please try again')
  }
}



const createNewTeam = async (request, response) => {
  try {
    const {
      regionId, name, headCoach, sponsor, solo, mid, jungle, support, hunter
    } = request.body

    if (!regionId || !name || !solo || !mid || !jungle || !support || !hunter) {
      return response.status(400).send('Missing one of the following: regionId, name, solo, mid, jungle, support, hunter')
    }

    const newTeam = await models.Teams.create({
      regionId, name, headCoach, sponsor, solo, mid, jungle, support, hunter
    })

    return response.status(201).send(newTeam)
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error while creating new team')
  }
}

const updateTeam = async (request, response) => {
  try {
    const {
      regionId, name, headCoach, sponsor, solo, mid, jungle, support, hunter
    } = request.body

    const { id } = request.params

    if (!regionId || !name || !headCoach || !sponsor || !solo || !mid || !jungle || !support || !hunter) {
      return response.status(400).send('Missing one of the following: regionId, name, headCoach, sponsor, solo, mid, jungle, support, hunter')
    }

    const team = await models.Teams.findOne({ where: { id } })

    if (!team) return response.status(400).send(`Unable to find the team with id: ${id} to update`)

    await team.update({
      regionId, name, headCoach, sponsor, solo, mid, jungle, support, hunter
    })

    return response.status(201).send('The team has been successfully updated')
  } catch (e) {
    console.log(e)

    response.status(500).send('Error while updating team')
  }
}

const deleteTeamById = async (request, response) => {
  try {
    const { id } = request.params

    const team = await models.Teams.findOne({ where: { id } })

    if (!team) return response.status(400).send(`Unable to find the team with id: ${id} to delete`)

    await team.destroy()

    return response.status(200).send('Team has been successfully deleted')
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error while deleting team')
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createNewTeam,
  updateTeam,
  deleteTeamById
}
