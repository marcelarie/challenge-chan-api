import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { memeRouter, userRouter, searchRouter } from './routes/index.js'
import errorMiddleware from './middlewares/error-middleware.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/meme', memeRouter)
app.use('/search', searchRouter)

app.use(errorMiddleware)

export { app }
