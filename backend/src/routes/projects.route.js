import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { createProject, deleteProject, editProject, getProjects } from "../controllers/projects.controller.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router()

router.get('/', protectRoute, getProjects)
router.post('/', protectRoute, adminOnly, createProject)
router.put('/:projectId', protectRoute, adminOnly, editProject)
router.delete('/:projectId', protectRoute, adminOnly, deleteProject)

export default router