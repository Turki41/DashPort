import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import connectDB from './db/connectDB.js'

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 5000

app.use('/api/auth', authRoutes)

app.listen(PORT, (req, res) => {
    console.log('server started at port ', PORT)
    connectDB()
})
