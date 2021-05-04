const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const addRouter = require('./routes/addRoutes')


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/todo' , addRouter)


module.exports = app
