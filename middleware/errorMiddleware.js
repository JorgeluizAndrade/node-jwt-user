const notFound = (req, res, error, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)

    res.json({
        message: error.message,
        stack: (process.env.NODE_ENV = 'production' ? null : err.stack),
    })
}

const errorHandler = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`)
    res.status(404)
    next(error)
  }
  
  export { notFound, errorHandler }