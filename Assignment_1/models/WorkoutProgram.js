const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('./Exercise.js');

const WorkoutProgramSchema = new Schema({
    exercises: {
        type: Array[Exercise],
        required: true,
        min: 1
    }
})