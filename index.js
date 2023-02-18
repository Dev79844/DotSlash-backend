const express = require('express')
const app = require('./app')
require('dotenv').config()
const connectWithDb = require('./config/db')

connectWithDb();

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})
