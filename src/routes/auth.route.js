import { Router } from 'express'
import authControllers from '../controllers/auth.controller.js'

const router = Router()

router.post('/sign-up',authControllers.signup)
router.post('/login',authControllers.login)

export default router
