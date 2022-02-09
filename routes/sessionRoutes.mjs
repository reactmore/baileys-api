import { Router } from 'express'
import { body } from 'express-validator'
import requestValidator from '../middleware/requestValidator.mjs'
import * as controller from '../controllers/sessionController.mjs'

const router = Router()

router.get('/find/:id', controller.find)

router.post('/add', body('id').notEmpty(), requestValidator, controller.add)

router.delete('/delete/:id', controller.del)

export default router
