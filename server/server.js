/*
This is the program for hosting the website. It logs connections, serves statc content,
and routes all other connections to the API.
*/

const express = require('express');
const morgan = require('morgan');
const server = express();

// Log request
server.use(morgan('dev'));

// Route API requests to API
server.use('/api', require('./api/api.js'));

// Serve static content
server.use(express.static('public'));

// Launch server
const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});