import { Router } from 'express'
import * as UserMethods from '../controllers/users/index.js'

const userRouter = Router()

userRouter.post('/sign-up', UserMethods.signUp)
userRouter.get('/by-username/:username', UserMethods.getUserByUsername)
userRouter.get('/:id', UserMethods.getUserById)

export default userRouter
