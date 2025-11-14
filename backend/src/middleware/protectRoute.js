import jwt from "jsonwebtoken"
import User from "../models/User.model.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.token

        if (!token) {
            console.log('No token found')
            return res.status(401).json({ message: 'Unauthorized: No token found' })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findById(decoded.userId)

        if (!user) {
            console.log('No user found')
            res.status(404).json({ message: 'Unauthorized: Invalid token' })
        }

        req.user = user
        next()
    } catch (error) {
        console.log('Error in middleware')
        return res.status(500).json({ message: 'Internal server error' })
    }
}