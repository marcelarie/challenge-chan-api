import Meme from '../../models/Meme-model.js'

export async function getAllMemes(req, res, next) {
    try {
        const response = await Meme.find({}).populate('user').sort({ $natural: '-1'})

        if (!response) return res.status(400).send(response)
        if (response.length <= 0) return res.status(204).send(response)
        if (response) return res.status(200).send(response)
    } catch (error) {
        next(error)
    }
}

export async function postMeme(req, res, next) {
    const { body } = req

    try {
        const response = await Meme.create(body)

        if (!response) return res.status(400).send(response)
        if (response) return res.status(202).send(response)
    } catch (error) {
        next(error)
    }
}
