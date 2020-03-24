const express = require('express');
const Classroom = require('../models/classroom');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        Classroom.find()
            .sort({
                code: 1,
                section: 1
            })
            .exec(
                (err, classrooms) => {
                    if (err) {
                        console.error(err);
                        res.status(500).json(err);
                    } else {

                        res.status(200).json(classrooms);
                    }
                }
            )
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
});

router.post('/search/', async (req, res, next) => {
    try {

        let data = req.body;

        Object.keys(data).forEach((key) => (!data[key]) && delete data[key]);

        Classroom.find(data)
            .sort({
                code: 1,
                section: 1
            })
            .exec(
                (err, classrooms) => {
                    if (err) {
                        console.error(err);
                        res.status(500).json(err);
                    } else {

                        res.status(200).json(classrooms);
                    }
                }
            )
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
});

router.post('/create/', async (req, res, next) => {
    try {
        let data = req.body;

        let filter = {
            code: data.code,
            section: data.section,
        }

        let update = {
            name: data.name,
            professor: data.professor,
            meet_link: data.meet_link,
            drive_link: data.drive_link,
            hour: data.hour,
            day: data.day,
        }

        Object.keys(update).forEach((key) => (!update[key] || update[key].length == 0) && delete update[key]);

        Classroom.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true
            },
            (err, classroom) => {
                if (err) {
                    console.error(err)
                    res.status(500).json(err);
                } else {


                    res.status(200).json(classroom);
                }
            }
        )

    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
});

module.exports = router;