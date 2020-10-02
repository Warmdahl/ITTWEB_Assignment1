var mongoose = require('mongoose')
const WorkoutList = mongoose.model('Workout')
const bcrypt = require('bcrypt');

module.exports.workoutList = async function(req, res){
    const workouts = await WorkoutList.find({}).catch(reason => res.render("error", reason));
    res.render("wourkoutlist", {title: "workoutlist",workouts})
}

module.exports.showWorkout = async function(req, res){
    const workout = await WorkoutList.find({name: req.body.name}).catch(reason => res.render("error", reason));
    res.render("wourkoutlist", {workout: workout})
}