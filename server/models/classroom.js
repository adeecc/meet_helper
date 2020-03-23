const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var supergoose = require('supergoose')

const classroomSchema = new Schema({
    professor: {
        type: String,
        required: true
    }, 
    code: {
        type: String,
        required: true,
        max: 10,
    },
    name: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
        max: 2
    },
    meet_link: {
        type: String,
        required: true,
        max: 38
    },
    drive_link: {
        type: String,
        max: 38
    },
    hour: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    day: [{
        type: String,
        enum: ['M', 'T', 'W', 'Th', 'F', 'S']
    }],
});

classroomSchema.plugin(supergoose);
classroomSchema.virtual('url').get(() => '/classroom/' + this._id);

module.exports = mongoose.model("Classroom", classroomSchema);
