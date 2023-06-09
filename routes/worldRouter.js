const express = require('express')
const router = express.Router()
const controller = require('../controllers/worldController')

router.get('/', controller.getAllWorlds)
router.get('/:user_id', controller.getWorlds)
router.post('/post', controller.createWorld)
router.get('/world/:id', controller.getWorldId)
router.put('/:id', controller.updateWorld)
router.delete('/:id', controller.deleteWorld)

module.exports = router