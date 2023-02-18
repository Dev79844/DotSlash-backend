const express = require('express')
const User = require('../models/researcher')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { token } = require('morgan')

exports.registerUser = async(req,res) => {
    try {
        const {name, email, password} = req.body

        if(!(name && email && password)){
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
            password: encPass
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

        // if(!(user)){
        //     res.status(401).send("User not registered")
        // }

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