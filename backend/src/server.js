import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import heroRoutes from './routes/hero.route.js'
import technologiesRoutes from './routes/technology.route.js'
import certificateRoutes from './routes/certificate.route.js'
import projectsRoutes from './routes/projects.route.js'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(express.json({ limit: '3mb' }));

dotenv.config()
app.use(cookieParser())

const PORT = process.env.PORT || 5000

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman, or same-origin requests)
        if (!origin) {
            return callback(null, true)
        }
        if (allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use('/api/auth', authRoutes)
app.use('/api/hero', heroRoutes)
app.use('/api/technology', technologiesRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/certificate', certificateRoutes)

app.listen(PORT, () => {
    console.log('server started at port ', PORT)
    connectDB()
})
