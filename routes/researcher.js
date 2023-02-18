const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/researcher')
const auth = require('../middlewares/auth')

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/test",auth, (req,res) => {
    res.send("Hello")
} )

module.exports = router