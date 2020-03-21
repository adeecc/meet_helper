const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

professorSchema.virtual('url').get(() => '/professor/' + this._id);

module.exports = mongoose.model("Professor", professorSchema);
