const express = require('express');
const api = express.Router();

api.use('/users', require('./users.js'));
api.use('/clubs', require('./clubs.js'));
api.use('/users_clubs', require('./users_clubs.js'));

module.exports = api;