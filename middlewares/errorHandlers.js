const errorResponse = function (err, req, res, next) {
    // console.error(err.stack)
    if (res.headersSent) {
        return next(err)
    }
    res.status(500);
    res.send({ error: 'Some error occured', msg: err })
}

module.exports = {
    errorResponse
}