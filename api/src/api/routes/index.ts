import { Router } from 'express'
import livrosRouter from './livros'

const router = Router()

router.use('/livros', livrosRouter)

export default router