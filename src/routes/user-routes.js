import { Router } from 'express'
import * as UserMethods from '../controllers/users/index.js'

const userRouter = Router()

userRouter.post('/sign-up', UserMethods.signUp)
userRouter.get('/:id', UserMethods.getUserById)

export default userRouter
