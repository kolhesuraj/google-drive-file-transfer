const ApiError = require('./ApiError');

const errorConverter = (err, _req, _res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode ? 400 : 500;
        const message = error.message || statusCode;
        error = new ApiError(statusCode, message, false, err.stack);
    }
    next(error);
};


const errorHandler = (err, _req, res, _next) => {
    let { statusCode, message } = err;
    res.locals.errorMessage = err.message;
    const response = {
        code: statusCode,
        message,
    };
    res.status(statusCode).send(response);
};


module.exports = {
    errorConverter,
    errorHandler,
};