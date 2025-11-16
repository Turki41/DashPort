import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { createTechnology, deleteTechnology, editTechnology, getTechnologies } from '../controllers/technology.controller.js'
import { adminOnly } from '../middleware/adminOnly.js'

const router = express.Router()

router.get('/', protectRoute, getTechnologies)
router.post('/', protectRoute, adminOnly, createTechnology)
router.put('/:techId', protectRoute, adminOnly, editTechnology)
router.delete('/:techId', protectRoute, adminOnly, deleteTechnology)

export default router