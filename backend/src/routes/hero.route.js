import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { createHero, editHero, getHero } from "../controllers/hero.controller.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router()

router.get('/', protectRoute, getHero)
router.post('/new', protectRoute, adminOnly, createHero)
router.put('/:heroId', protectRoute, adminOnly , editHero)

export default router