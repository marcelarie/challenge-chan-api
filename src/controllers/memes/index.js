import Meme from '../../models/Meme-model.js'

export async function getAllMemes(req, res, next) {
    try {
        const response = await Meme.find({ itsComment: false }).populate('user comments').sort({ $natural: '-1' })

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
        const memeBody = (body) => {
            if (body.commentId) return { rest: body, commentId: body.commentId }
            return { rest: body }
        }

        const checkedBody = memeBody(body)

        const response = await Meme.create(checkedBody.rest)
        console.log(response)

        if (checkedBody.commentId) {
            const commentResponse = await Meme.findByIdAndUpdate(checkedBody.commentId, {
                $push: { comments: response._id },
            })
            console.log(commentResponse)
        }
        if (!response) return res.status(400).send(response)
        if (response) return res.status(202).send(response)
    } catch (error) {
        next(error)
    }
}
