const express = require('express')
const router = express.Router()
const {getAllGrants, getGrant} = require("../controllers/grant")

router.get("/allgrants", getAllGrants)
router.get("/grant/:id",getGrant)

module.exports = router