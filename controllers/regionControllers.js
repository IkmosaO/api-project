/* eslint-disable max-len */
/* eslint-disable no-console */
const models = require('../models')

const getAllRegions = async (request, response) => {
  try {
    const allRegions = await models.Regions.findAll()

    return response.status(200).send(allRegions)
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error trying to retrieve region list, please try again')
  }
}

const getRegionById = async (request, response) => {
  try {
    const { id } = request.params

    const foundRegion = await models.Regions.findOne({
      where: { id }
    })

    return foundRegion
      ? response.send(foundRegion)
      : response.status(404).send('No region found, please try again')
  } catch (e) {
    return response.status(500).send('Error trying to retrieve region, please try again')
  }
}



const createNewRegion = async (request, response) => {
  try {
    const {
      name
    } = request.body

    if (!name) {
      return response.status(400).send('Missing one of the following: name')
    }

    const newRegion = await models.Regions.create({
      name
    })

    return response.status(201).send(newRegion)
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error while creating new region')
  }
}

const updateRegion = async (request, response) => {
  try {
    const {
      name
    } = request.body

    const { id } = request.params

    if (!name) {
      return response.status(400).send('Missing the following: name')
    }

    const region = await models.Regions.findOne({ where: { id } })

    if (!name) return response.status(400).send(`Unable to find the region with id: ${id} to update`)

    await region.update({
      name
    })

    return response.status(201).send('The region has been successfully updated')
  } catch (e) {
    console.log(e)

    response.status(500).send('Error while updating region')
  }
}

const deleteRegionById = async (request, response) => {
  try {
    const { id } = request.params

    const region = await models.Regions.findOne({ where: { id } })

    if (!region) return response.status(400).send(`Unable to find the region with id: ${id} to delete`)

    await region.destroy()

    return response.status(200).send('Region has been successfully deleted')
  } catch (e) {
    console.log(e)

    return response.status(500).send('Error while deleting region')
  }
}

module.exports = {
  getAllRegions,
  getRegionById,
  createNewRegion,
  updateRegion,
  deleteRegionById
}
