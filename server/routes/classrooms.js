const express = require('express');
const mongoose = require("mongoose");
const {
    body
} = require('express-validator');

const Classroom = require('../models/classroom');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        Classroom.find()
            .sort({
                dept: 1,
                code: 1,
                section: 1
            })
            .exec(
                (err, classrooms) => {
                    if (err) return (next(err));

                    res.status(200).json(classrooms);
                }
            )
    } catch (e) {
        error.error(e);
        res.status(500).json({});
    }
});

router.post('/create/', async (req, res, next) => {
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
                        console.error(err)
                        res.status(500).json({});
                    } else {
                        res.status(200).json(classroom);
                    }
                }
            )

        } catch (e) {
            console.error(e);
            res.status(500).json({});
        }
    },

);

module.exports = router;