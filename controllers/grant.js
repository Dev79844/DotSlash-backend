const express = require('express')
const Grant = require('../models/grant')

exports.getAllGrants = async(req,res) => {
    try {
        const data = await Grant.find({})

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

exports.getGrant = async(req,res) => {
    try{
        const id = req.params.id

        const data = await Grant.find({schemeId: id})

        res.status(200).json(data)
    }catch(error){
        console.log(error)
    }
}