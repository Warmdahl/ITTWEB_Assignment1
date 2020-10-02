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
        required: true,
        min: 1
    },
    timerep: {
        type: String,
        required: true,
        min: 1
    }
})

mongoose.model('Exercise', ExerciseSchema);