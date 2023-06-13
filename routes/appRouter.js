const express = require('express')
const router = express.Router()

const ProfileRouter = require('./profileRouter.js')
const WorldRouter = require('./worldRouter.js')
const OCRouter = require('./ocRouter.js')

router.get('/', (req, res) => res.status(200).send('This is the API page'))
router.use('./profiles', ProfileRouter)
router.use('./worlds', WorldRouter)
router.use('./ocs', OCRouter)

module.exports = router