export default function errorMiddleware(error, req, res, next) {
    //TODO:
    res.status(500).send({
        data: null,
        error: error,
    })
}
