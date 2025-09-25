const User = require('../model/user.model.js')
const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



route.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if(!name || !email || !password){
            return res.status(401).json({msg:"All fields are required."})
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword })
        await user.save();
        // console.log(password)
        res.status(201).json({ "msg": "User registered successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


route.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User not exists." })
        }
        const isMatched = await bcrypt.compare(password, user.password)

        if (!isMatched) {
            return res.status(401).json({ error: "Invalid Password." })
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, 'practice', { expiresIn: '1h' })

        res.status(200).json({
            msg: "Login Successfully", token,
            user: {
                name: user.name,
                email: user.email
            }
        })


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})








module.exports = route