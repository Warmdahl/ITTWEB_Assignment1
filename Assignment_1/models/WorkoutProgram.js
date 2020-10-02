const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = mongoose.model('Exercise')

const WorkoutProgramSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 1
    },
    exercises: {
        type: String,
        required: true,
        min: 1
    }
})

mongoose.model('Workout', WorkoutProgramSchema)