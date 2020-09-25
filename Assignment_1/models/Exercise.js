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
        type: Int16Array,
        required: true,
        min: 1
    },
    timerep: {
        type: Int16Array,
        required: true,
        min: 1
    }
})