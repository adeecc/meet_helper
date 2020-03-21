const express = require('express');
const mongoose = require("mongoose");

const Course  = require('../models/course');
const Professor  = require('../models/professor');
const Classroom  = require('../models/classroom');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {

        console.log("In Routes/classrooms.js")
        console.log(req.query);

        Classroom.find()
        .populate('professor course')
        // .sort({ course: { $meta: "branch" }, course: { $meta: "code" }, section: 1 })
        .exec(
            (err, classrooms) => {
                if (err) return (next(err));

                console.log(classrooms);
                res.status(200).json(classrooms);
            }
        )
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        console.log("In Routes/classrooms.js")
        console.log(req.query);
        
        Classroom.findById(req.params.id)
        .populate('professor course')
        // .sort({ course: { $meta: "branch" }, course: { $meta: "code" }, section: 1 })
        .exec(
            (err, classrooms) => {
                if (err) return (next(err));

                console.log(classrooms);
                res.status(200).json(classrooms);
            }
        )
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});


router.post('/', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});


router.post('/search/', async (req, res, next) => {
    try {
        console.log(req.query);
        res.status(200).json({});
    } catch(e) {
        error.log(e);
        res.status(500).json({});
    }
});

/*
{ courseDept: 'EEE',
courseCode: 'F111',
courseName: 'Electrial Sciences',
section: 'L4',
professorName: 'Sudha Radhika',
hour: '1',
meet_link: 'http://meet.google.com/uha-dnia-yvb',
drive_link:
 'https://drive.google.com/drive/u/0/folders/1XCy596q08pmFChwTqHVPGkcfvniogKj7',
days: [ 'M', 'W', 'F' ] }
*/

router.post('/create/', async (req, res, next) => {
    try {
        console.log("Inside POST Create")
        console.log(req.body);

        data = req.body

        let professor = await Professor.create({
            name: data.professorName,
        });

        professor.save((err) => {
            if (err) {
                next(err, null)
                return
            }
    
            console.log('New Professor: ' + professor);
            professors.push(professor)
            next(null, professor)
        });

        let course = await Course.create({
            branch: data.courseDept,
            code: data.courseCode,
            name: data.courseName,
        });

        course.save((err) => {
            if (err) {
                next(err, null)
                return
            }
    
            console.log('New Course: ' + course);
            courses.push(course)
            next(null, course)
        });


        let classroom = await Classroom.create({
            professor: professor,
            course: course,
            section: data.section,
            meet_link: data.meet_link,
            hour: data.hour,
            day: data.days,
        });
    
        classroom.save((err) => {
            if (err) {
                next(err, null)
                return
            }
    
            console.log('New Classroom: ' + classroom);
            classrooms.push(classroom)
            next(null, classroom)
        });

        res.status(200).json(classroom);
    } catch(e) {
        console.log(e);
        res.status(500).json({});
    }
});

module.exports = router;