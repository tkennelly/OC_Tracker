const express = require('express')
const router = express.Router()
const controller = require('../controllers/worldController')

router.get('/', controller.getAllWorlds)
router.get('/:id', controller.getWorld)
router.post('/post', controller.createWorld)


module.exports = router