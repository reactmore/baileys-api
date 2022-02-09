import { Router } from 'express'
import sessionRoutes from './routes/sessionRoutes.mjs'
import chatRoutes from './routes/chatRoutes.mjs'
import groupRoutes from './routes/groupRoutes.mjs'
import response from './response.mjs'

const router = Router()

router.use('/session', sessionRoutes)
router.use('/chat', chatRoutes)
router.use('/group', groupRoutes)

router.all('*', (req, res) => {
    response(res, 404, false, 'The requested url cannot be found.')
})

export default router
