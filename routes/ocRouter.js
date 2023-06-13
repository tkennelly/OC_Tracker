const express = require('express')
const router = express.Router()
const controller = require('../controllers/ocController')

router.get('/', controller.getAllOCs)
router.get('/:id', controller.getOC)
router.post('/post', controller.createOC)
router.put('/:id', controller.updateOC)
router.delete('/:id', controller.deleteOC)


module.exports = router