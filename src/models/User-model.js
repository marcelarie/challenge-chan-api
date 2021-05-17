import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    _id: String,
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        ref: 'user',
    },
})

const User = mongoose.model('user', UserSchema)
export default User
