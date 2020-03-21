const express = require('express');
const mongoose = require("mongoose");

const Professor  = require('../models/professor');
const router = express.Router();
// const Professor = mongoose.model('Professor');

router.get('/professors', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});

router.get('/professors', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});

module.exports = router;