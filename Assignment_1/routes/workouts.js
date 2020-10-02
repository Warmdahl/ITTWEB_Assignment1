var express = require('express');
var router = express.Router();
var workoutcontroller = require('../Controllers/workoutcontroller')

//GET
//router.get('/', workoutcontroller.showWorkout)


router.get('/workoutlist', workoutcontroller.workoutlist)




module.exports = router;
