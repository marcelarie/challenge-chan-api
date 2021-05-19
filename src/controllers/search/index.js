import User from '../../models/User-model.js'
import Meme from '../../models/Meme-model.js'

export async function searchByParams(req, res, next) {
    const { search } = req.params
    try {
        const memeNameResponse = await Meme.find({
            itsComment: false,
            name: {
                $regex: search,
                $options: 'i',
            },
        })
        const memeDescriptionResponse = await Meme.find({
            itsComment: false,
            description: {
                $regex: search,
                $options: 'i',
            },
        })
        const usernameResponse = await User.find({
            username: {
                $regex: search,
                $options: 'i',
            },
        })
        const emailResponse = await User.find({
            email: {
                $regex: search,
                $options: 'i',
            },
        })

        if (!memeNameResponse || !memeDescriptionResponse) return res.status(400).send(memeNameResponse || memeDescriptionResponse)
        if (!usernameResponse || !emailResponse) return res.status(400).send(usernameResponse || emailResponse)

        return res.status(200).send({ memes: { memeNameResponse, memeDescriptionResponse }, users: { emailResponse, usernameResponse } })
    } catch (error) {
        next(error)
    }
}
