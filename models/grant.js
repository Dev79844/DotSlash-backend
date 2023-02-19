const mongoose = require('mongoose')

const grantSchema = new mongoose.Schema({
    schemeId: Number,
    researchArea: String,
    eligible: String,
    grantAmt: String,
    duration: Number,
    appDead: String,
    noApp: Number,
    noAppFund: Number
    // title: String,
    // entity: String,
    // criteria: [String],
    // url: String
})

module.exports = mongoose.model('Grant', grantSchema)