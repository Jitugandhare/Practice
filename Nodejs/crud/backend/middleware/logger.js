

const logger = (req, res, next) => {

    res.on('finish', () => {
        console.log(`${req.method} ${req.url}`)
    })
    next();


}

module.exports = logger