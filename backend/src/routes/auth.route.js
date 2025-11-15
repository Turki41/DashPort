import express from 'express'
import { checkAuth, login, logout, signup } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/protectRoute.js'
import { adminOnly } from '../middleware/adminOnly.js'

const router = express.Router()

router.post('/signup', protectRoute, adminOnly, signup)
router.post('/login', login)
router.get('/check-auth', protectRoute, checkAuth)
router.post('/logout', protectRoute, logout)

export default router 