const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    numbersets: {
        type: String,
        required: true
    },
    timerep: {
        type: String,
        required: true
    }
})

mongoose.model('Exercise', ExerciseSchema);
module.exports.ExerciseSchema = ExerciseSchema;