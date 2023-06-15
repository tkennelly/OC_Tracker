const express = require('express')
const router = express.Router()
const controller = require('../controllers/profileController')

router.get('/', controller.getAllProfiles)
router.get('/:username', controller.getProfile)
router.post('/post', controller.createProfile)
router.put('/:id', controller.updateProfile)
router.delete('/:id', controller.deleteProfile)


module.exports = router