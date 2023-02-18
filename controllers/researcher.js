const express = require('express')
const User = require('../models/researcher')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { token } = require('morgan')
const { update } = require('../models/researcher')

exports.registerUser = async(req,res) => {
    try {
        const {name, email, password, designation, department, institution, bio, age, permanentEmployment} = req.body

        if(!(name && email && password && designation, department, institution, bio, age, permanentEmployment)){
            res.status(400).send("Please fill all the fields")
        }

        const existingUser = await User.findOne({ email })

        if(existingUser){
            res.status(401).send('User already exists')
        }

        const encPass = await bcrypt.hash(password, 10)
 
        const user = await User.create({
            name,
            email,
            password: encPass,
            designation,
            department,
            institution,
            bio,
            age,
            permanentEmployment
        })

        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        )

        user.token = token

        user.password = undefined

        res.status(201).json(user)
    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = async(req,res) => {
    try {
        const {email, password} = req.body

        if(!(email && password)){
            res.status(400).send("Field is missing")
        }

        const user = await User.findOne({email})


        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.SECRET_KEY,
                {
                    expiresIn: "1d"
                }
            )

            user.token = token
            user.password = undefined

            res.status(200).json(user)
        }
        res.status(400).send("Email or password is incorrect")

    } catch (error) {
        console.log(error)
    }
}

exports.getProfile = async(req,res) => {
    try {
        const id = req.params.id

        const data = await User.findById(id)

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

exports.addPublication = async(req,res) => {
    try{
        const id = req.params.id
        const {updatedPublication} = req.body

        const data = await User.findByIdAndUpdate({_id: id}, {publication: updatedPublication})

        const updatedUser = await User.findById(id)

        res.status(200).json(updatedUser)

    }catch(error){
        console.log(error)
    }
}

exports.addAwards = async(req,res) => {
    try{
        const id = req.params.id
        const {updatedAwards} = req.body

        const data = await User.findByIdAndUpdate({_id: id}, {awards: updatedAwards})

        const updatedUser = await User.findById(id)

        res.status(200).json(updatedUser)

    }catch(error){
        console.log(error)
    }
}

exports.addConference =async(req,res) =>{
    try{
        const id = req.params.id
        const {updatedConference} = req.body

        const data = await User.findByIdAndUpdate({_id: id}, {conference: updatedConference})

        const updatedUser = await User.findById(id)

        res.status(200).json(updatedUser)

    }catch(error){
        console.log(error)
    }
}

exports.addQualification = async(req,res) => {
    try{
        const id = req.params.id
        const {updatedQual} = req.body

        const data = await User.findByIdAndUpdate({_id: id}, {qualifications: updatedQual})

        const updatedUser = await User.findById(id)

        res.status(200).json(updatedUser)

    }catch(error){
        console.log(error)
    }
}

exports.addBookChapters = async(req,res) => {
    try{
        const id = req.params.id
        const {updatedBookChapters} = req.body

        const data = await User.findByIdAndUpdate({_id: id}, {bookChapters: updatedBookChapters})

        const updatedUser = await User.findById(id)

        res.status(200).json(updatedUser)

    }catch(error){
        console.log(error)
    }
}