import { Router } from 'express'
import * as UserMethods from '../controllers/users/index.js'

const userRouter = Router()

userRouter.post('/sign-up', UserMethods.signUp)

export default userRouter
