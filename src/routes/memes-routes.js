import { Router } from 'express'
import * as MemeMethods from '../controllers/memes/index.js'

const memeRouter = Router()

memeRouter.get('/all/:topic', MemeMethods.getAllMemes)
memeRouter.get('/all-with/:search', MemeMethods.getAllMemes)
memeRouter.post('/post', MemeMethods.postMeme)

export default memeRouter
