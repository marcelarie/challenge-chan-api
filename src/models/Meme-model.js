import mongoose from 'mongoose'

const stringReq = {
    type: String,
    required,
}

const MemeSchema = mongoose.Schema({
    name: stringReq,
    topic: stringReq,
    imageUrl: stringReq,
})

const Meme = mongoose.model('meme', MemeSchema)
export default Meme
