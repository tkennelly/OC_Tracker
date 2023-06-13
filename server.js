const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const AppRouter = require('./routes/appRouter.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParse.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.get('/', (req, res) => res.json({message: 'This is the home page'}))

app.use('/api', AppRouter)