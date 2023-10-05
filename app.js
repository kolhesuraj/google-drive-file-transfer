const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const fileHandlingRoutes = require("./router/file.handling");
const { errorConverter, errorHandler } = require("./errorHandler/error.handler");

app.use(
    helmet(),								// Set necessary HTTP headers for app security.
    express.json(),							// JSON requests are received as plain text. We need to parse the json request body.
    express.urlencoded({ extended: true }),	// Parse urlencoded request body if provided with any of the requests
    compression()							// Using gzip compression for faster transfer of response data.
);

// Enable cors to accept requests from any frontend domain, all possible HTTP methods, and necessary items in request headers
app.use(cors());
app.options('*', cors());

// use routes
app.use('/api', fileHandlingRoutes);

// Send back a 404 error for any unknown api request
app.use((_req, res) => {
    res.status(404).send('NOT FOUND!');
});

// Convert error to ApiError, if request was rejected or it throws an error
app.use(errorConverter);

// Handle the error
app.use(errorHandler);

module.exports = app;