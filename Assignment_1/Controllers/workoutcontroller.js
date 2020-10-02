var mongoose = require('mongoose')
const WorkoutList = mongoose.model('Workout')
const Exercise = mongoose.model('Exercise')
//const Exercise = require('../models/Exercise')
const bcrypt = require('bcrypt');


//Get for all workouts (List of all workoutprograms)
module.exports.workoutList = async function(req, res){
    const workouts = await WorkoutList.find({}).catch(reason => res.render("error", reason));
    res.render("workoutlist", {title: "Workoutprogram list", workouts})
}

//Get for 1 specific
module.exports.showWorkout = async function(req, res){
    const workout = await WorkoutList.find({name: req.body.name}).catch(reason => res.render("error", reason));
    res.render("workoutlist", {workout})
}

//Create workout
module.exports.createworkout = async function(req, res) {
    var Exercisetest = new Exercise;
    Exercisetest.name = "Emil";
    Exercisetest.description = "Emilabs";
    Exercisetest.numbersets = "9000";
    Exercisetest.timerep = "3";

    var workout = await WorkoutList.create({name: "Emil", exercise: Exercisetest}).catch(reason => res.render("error", reason));
    if(workout){
        res.redirect('//localhost:8080/workouts/workoutlist')
    }
}

//Create Exercise
module.exports.createExercise = async function(req, res) {
    var workoutprogram = await WorkoutList.find({name: req.body.id}).catch(reason => res.render("error", reason));
    var exercise = await Exercise.create(
        {   name: req.body.exercisename, 
            description: req.body.exercisedescrip,
            numbersets: req.body.exercisenumset,
            timerep: req.body.exercisetimerep})
            .catch(reason => res.render("error", reason));
    if(exercise){
        workoutprogram.exercises.add(exercise);
        await WorkoutList.update({name: req.body.id}, {$set: workoutprogram}).catch(reason => res.render("error", reason));
        res.redirect('//localhost:8080/workouts/showexcinwok/' + workoutprogram.name);
    }
}

//Add exercise to workout (might be redundent)
module.exports.addExctoWok = async function(req, res) {
    var exercise = await Exercise.find({name: req.body.name}).catch(reason => res.render("error", reason));
    var workoutprogram = await WorkoutList.find({name: req.body.name}).catch(reason => res.render("error", reason));
    
    //want to add the specific exercise to the specific workoutprogram
    if(exercise && workoutprogram){
        workoutprogram.exercises.add(exercise);
    }
}

//Show all exercises in a workoutprogram
module.exports.showExcinWok = async function(req, res){
    var workoutprogram = await WorkoutList.find({name: req.body.id}).catch(reason => res.render("error", reason));
    
    //figure out a way to output the entire array of exercises
    if(workoutprogram){
        res.render('workout', {tilte: 'Someones program', workoutprogram})

    }
}

