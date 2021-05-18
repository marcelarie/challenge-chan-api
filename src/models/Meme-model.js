import mongoose from 'mongoose'

const MemeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    topic: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    itsComment: { type: Boolean, default: false },
    user: { type: String, ref: 'user' },
    comments: [{ type: String, ref: 'meme' }],
})

MemeSchema.set('timestamps', true)

const Meme = mongoose.model('meme', MemeSchema)
export default Meme
