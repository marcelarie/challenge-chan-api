import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { memeRouter, userRouter } from './routes/index.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/memes', memeRouter)

export { app }
