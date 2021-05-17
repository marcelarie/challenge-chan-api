import User from '../../models/User-model.js'

export async function signUp(req, res, next) {
    const { body } = req

    try {
        const response = await User.findOne({ _id: body.id })

        if (response) return res.status(204).send(response)

        const user = await User.create(body)
        console.log(user)

        if (user) return res.status(202).send(user)
        if (!user) return res.status(400).send(user)
    } catch (error) {
        // next(error)
        console.log( error)
    }
}
