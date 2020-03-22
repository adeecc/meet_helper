const express = require('express');
const mongoose = require("mongoose");
const {
    body
} = require('express-validator');

const Classroom = require('../models/classroom');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {

        console.log("In Routes/classrooms.js")
        console.log(req.query);

        Classroom.find()
            .sort({
                dept: 1,
                code: 1,
                section: 1
            })
            .exec(
                (err, classrooms) => {
                    if (err) return (next(err));

                    console.log(classrooms);
                    res.status(200).json(classrooms);
                }
            )
    } catch (e) {
        error.log(e);
        res.status(500).json({});
    }
});


router.post('/', async (req, res, next) => {
    try {
        console.log("Request: ")
        console.log(req.body);
    } catch (e) {
        error.log(e);
        res.status(500).json({});
    }
});


router.post('/search/', async (req, res, next) => {
    try {
        console.log("Request: ")
        console.log(req.body);
    } catch (e) {
        error.log(e);
        res.status(500).json({});
    }
});

router.post('/create/', async (req, res, next) => {
    console.log("Reached /api/create")
        try {
            data = req.body;
            await Classroom.findOrCreate({
                    dept: data.courseDept,
                    code: data.courseCode,
                    section: data.section,
                }, {
                    name: data.courseName,
                    professor: data.professorName,
                    meet_link: data.meet_link,
                    drive_link: data.drive_link,
                    hour: data.hour,
                    day: data.days,
                },
                (err, classroom) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json({});
                    } else {
                        console.log(classroom);
                        res.status(200).json(classroom);
                    }
                }
            )

        } catch (e) {
            console.log(e);
            res.status(500).json({});
        }
    },

);

module.exports = router;