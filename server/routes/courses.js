const express = require('express');
const mongoose = require("mongoose");

const Course  = require('../models/course');
const router = express.Router();
// const Course = mongoose.model('Course');

router.get('/courses', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});

router.get('/courses', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});

module.exports = router;