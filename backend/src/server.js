import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import heroRoutes from './routes/hero.route.js'
import technologiesRoutes from './routes/technology.route.js'
import projectsRoutes from './routes/projects.route.js'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json({ limit: '3mb' }));

dotenv.config()
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.use('/api/auth', authRoutes)
app.use('/api/hero', heroRoutes)
app.use('/api/technology', technologiesRoutes)
app.use('/api/projects', projectsRoutes)

app.listen(PORT, (req, res) => {
    console.log('server started at port ', PORT)
    connectDB()
})
