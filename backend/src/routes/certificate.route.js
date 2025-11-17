import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { createCertificate, deleteCertificate, editCertificate, getCertificates } from '../controllers/certificate.controller.js'
import { adminOnly } from '../middleware/adminOnly.js'

const router = express.Router()

router.get('/', protectRoute, getCertificates)
router.post('/', protectRoute, adminOnly, createCertificate)
router.put('/:certId', protectRoute, adminOnly, editCertificate)
router.delete('/:certId', protectRoute, adminOnly, deleteCertificate)

export default router