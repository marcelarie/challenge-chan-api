import User from '../../models/User-model.js'

export async function signUp(req, res, next) {
    const { body } = req

    try {
        const response = await User.findOne({ _id: body._id })

        if (response) return res.status(204).send(response)

        const user = await User.create(body)

        if (user) return res.status(202).send(user)
        if (!user) return res.status(400).send(user)
    } catch (error) {
        next(error)
    }
}

export async function getUserById(req, res, next) {
    const { id } = req.params

    try {
        const response = await User.findById(id)

        if (response) return res.status(202).send(response)
        if (!response) return res.status(400).send(response)
    } catch (error) {
        next(error)
    }
}

export async function getUserByUsername(req, res, next) {
    const { username } = req.params
    console.log(username)

    try {
        const response = await User.findOne({ username })

        if (response) return res.status(202).send(response)
        if (!response) return res.status(400).send(response)
    } catch (error) {
        next(error)
    }
}
