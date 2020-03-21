var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    branch: {
        type: String,
        required: true,
        max: 4
    },
    code: {
        type: String,
        required: true,
        max: 4
    },
    name: {
        type: String,
        required: true,
    }
});

courseSchema.virtual('url').get(() => '/course/' + this._id );

module.exports = mongoose.model('Course', courseSchema);