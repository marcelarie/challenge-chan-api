import mongoose from 'mongoose'

const MemeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    user: {
        type: String,
        ref: 'user'
    }
})

const Meme = mongoose.model('meme', MemeSchema)
export default Meme
