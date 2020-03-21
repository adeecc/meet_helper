#! /usr/bin/env node

console.log('populating databse...');


const async = require('async')
const Course = require('./models/course')
const Professor = require('./models/professor')
const Classroom = require('./models/classroom')
const CONSTANTS = require('./constants')

const mongoose = require('mongoose');
mongoose.connect(CONSTANTS.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let professors = []
let courses = []
let classrooms = []

professorCreate = (name, cb) => {
    professorDetail = {
        name: name
    }

    const professor = new Professor(professorDetail);

    professor.save((err) => {
        if (err) {
            cb(err, null)
            return
        }

        console.log('New Professor: ' + professor);
        professors.push(professor)
        cb(null, professor)
    });
}

courseCreate = (branch, code, name, cb) => {
    courseDetail = {
        branch: branch,
        code: code,
        name: name,
    }

    const course = new Course(courseDetail);

    course.save((err) => {
        if (err) {
            cb(err, null)
            return
        }

        console.log('New Course: ' + course);
        courses.push(course)
        cb(null, course)
    });
}

classroomCreate = (course, section, professor, meet_link, hour, day, cb) => {
    classroomDetail = {
        professor: professor,
        course: course,
        section: section,
        meet_link: meet_link,
        hour: hour,
        day: day,
    }

    const classroom = new Classroom(classroomDetail);

    classroom.save((err) => {
        if (err) {
            cb(err, null)
            return
        }

        console.log('New Classroom: ' + classroom);
        classrooms.push(classroom)
        cb(null, classroom)
    });
}


createCourseProfessors = (cb) => {
    async.series([
            (callback) => {
                professorCreate('A Michael Alphonse', callback);
            },
            (callback) => {
                professorCreate('DK Satpathi', callback);
            },
            (callback) => {
                professorCreate('N Jalaiah', callback);
            },
            (callback) => {
                professorCreate('Chittaranjan Hota', callback);
            },
            (callback) => {
                professorCreate('Sandeep Vidyapu', callback);
            },
            (callback) => {
                courseCreate('MATH', 'F112', 'Linear Algebra and Complex Analysis', callback);
            },
            (callback) => {
                courseCreate('MATH', 'F113', 'Probability and Statistics', callback);
            },
            (callback) => {
                courseCreate('BITS', 'F111', 'Thermodynamics', callback);
            },
            (callback) => {
                courseCreate('CS', 'F111', 'C Programming', callback);
            },
        ],
        // optional callback
        cb);
}


createClassrooms = (cb) => {
    async.series([
            (callback) => {
                classroomCreate(courses[0], "L8", professors[0], "https://meet.google.com/abc-def-ghi", 2, ["T", "Th", "S"], callback);
            },
            (callback) => {
                classroomCreate(courses[1], "L11", professors[1], "https://meet.google.com/xyz-lmn-fff", 3, ["M", "W", "F"], callback);
            },
            (callback) => {
                classroomCreate(courses[2], "L2", professors[2], "https://meet.google.com/soo-fin-bad", 3, ["T", "Th", "S"], callback);
            },
            (callback) => {
                classroomCreate(courses[3], "L1", professors[3], "https://meet.google.com/wht-dis-hoe", 2, ["T", "Th", "S"], callback);
            },
            (callback) => {
                classroomCreate(courses[3], "L2", professors[4], "https://meet.google.com/wtf-lil-nig", 9, ["T", "Th", "S"], callback);
            },
        ],
        // optional callback
        cb);
}

async.series([
        createCourseProfessors,
        createClassrooms,
    ],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        } else {
            console.log('Classrooms: ' + classrooms);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });