const express = require('express');
const clubs = express.Router();

const db = require('../database.js');

clubs.get('/ids', (req, res) => {
    res.send(db.clubIds);
});

clubs.get('/:id', (req, res) => {
    if (db.clubs[req.params.id]) {
        res.status(200);
        res.send(db.clubs[req.params.id]);
    } else {
        res.status(404);
        res.send();
    }
});

module.exports = clubs;