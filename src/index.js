import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { app } from './server.js'

dotenv.config()

const PORT = process.env.PORT || 5001

mongoose.set('useCreateIndex', true)

mongoose.connect(
    process.env.DB_CONNECT || 'mongodb://localhost/challenge-chan',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => console.log('db connected')
)

app.listen(PORT, () => console.log(`Server Running on port ${PORT} :)`))
