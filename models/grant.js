const mongoose = require('mongoose')

const grantSchema = new mongoose.Schema({
    title: String,
    entity: String,
    criteria: [String],
    url: String
})

module.exports = mongoose.model('Grant', grantSchema)