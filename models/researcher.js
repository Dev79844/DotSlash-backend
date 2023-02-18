const mongoose = require('mongoose')

const researcherSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    designation: String,
    department: String,
    instituion: String,
    description: String,
    publication: [String],
    awards: [String],
    bookChapters: [String],
    conference: [String],
    qualifiations: [String],
    token: String,
    age: Number,
    permanetEmployment: Boolean
})

module.exports = mongoose.model('User', researcherSchema)