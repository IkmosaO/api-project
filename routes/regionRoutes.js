const express = require('express')

const regionControllers = require('../controllers/regionControllers')
const router = express.Router()


router.get('/', regionControllers.getAllRegions)

router.get('/:id', regionControllers.getRegionById)

router.post('/', regionControllers.createNewRegion)

router.put('/:id', regionControllers.updateRegion)

router.delete('/:id', regionControllers.deleteRegionById)

module.exports = router
