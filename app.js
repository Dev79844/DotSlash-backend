const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const user = require('./routes/researcher')
const grant = require('./routes/grant')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

app.use("/api/v1", user)
app.use("/api/v1", grant)

module.exports = app
