import User from "../models/User.model.js"
import brcypt from 'bcrypt'
import generateTokenAndSetCookies from "../utils/generateTokenAndSetCookies.js"

export const signup = async (req, res) => {
    try {
        const { name, email, password, key } = req.body

        if (!name || !email || !password || !key) {
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        if (key != process.env.AKEY) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const user = await User.findOne({ email })


        if (user) {
            console.log('User already exist')
            return res.status(400).json({ message: 'User already exist' })
        }

        const role = email === process.env.RM ? process.env.R : 'Guest'
        const hashedPassword = await brcypt.hash(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        generateTokenAndSetCookies(res, newUser)

        return res.status(201).json({
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        })
    } catch (error) {
        console.log('Error in signup contorller', error)
        return res.status(500).json({ message: 'Internal sever error' })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        const user = await User.findOne({ email })

        if (!user) {
            console.log('No user found')
            return res.status(404).json({ message: 'Invalid credentials' })
        }

        const correctPassword = await brcypt.compare(password, user.password)
        if (!correctPassword) {
            console.log('Invalid credentials')
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        generateTokenAndSetCookies(res, user)

        return res.status(200).json({
            name: user.name,
            role: user.role
        })
    } catch (error) {
        console.log('Error in login controller', error)
        return res.statsu(500).json({ message: 'Internal server error' })
    }

}

