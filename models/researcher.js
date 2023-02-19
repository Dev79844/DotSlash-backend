const mongoose = require('mongoose')

const researcherSchema = new mongoose.Schema({
    researcherID: Number,
    name: String,
    researchArea: String,
    researchMethod: String,
    designation: String,
    gender: String,
    yoe: Number,
    email: String,
    password: String,
    department: String,
    instituion: String,
    bio: String,
    publication: [String],
    awards: [String],
    bookChapters: [String],
    conference: [String],
    qualifiations: [String],
    token: String,
    age: Number,
    permanetEmployment: Boolean,
    token: String
})

module.exports = mongoose.model('User', researcherSchema)