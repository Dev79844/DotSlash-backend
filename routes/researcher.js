const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getProfile, addPublication, addAwards, addConference, addQualification, addBookChapters} = require('../controllers/researcher')
const auth = require('../middlewares/auth')

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/profile/:id", getProfile)
router.put("/pub/:id", addPublication)
router.put("/awards/:id", addAwards)
router.put("/conference/:id", addConference)
router.put("/bc/:id", addBookChapters)
router.put("/qual/:id", addQualification)
router.get("/test",auth, (req,res) => {
    res.send("Hello")
})

module.exports = router