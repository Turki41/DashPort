import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.use('/api/auth', authRoutes)

app.listen(PORT, (req, res) => {
    console.log('server started at port ', PORT)
    connectDB()
})
