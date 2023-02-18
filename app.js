const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const user = require('./routes/researcher')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

app.use("/api/v1", user)

module.exports = app
