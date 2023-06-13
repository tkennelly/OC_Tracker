const express = require('express')
const router = express.Router()
const controller = require('../controllers/profileController')

router.get('/', controller.getAllProfiles)
router.get('/:id', controller.getProfile)
router.post('/post', controller.createProfile)


module.exports = router