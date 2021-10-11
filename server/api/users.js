const express = require('express');
const users = express.Router();

const db = require('../database.js');

users.get('/:id', (req, res) => {
    if (db.users[req.params.id]) {
        res.status(200);
        res.send(db.users[req.params.id]);
    } else {
        res.status(404);
        res.send();
    }
});

module.exports = users;