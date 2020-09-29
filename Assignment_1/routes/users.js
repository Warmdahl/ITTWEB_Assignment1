var express = require('express');
var router = express.Router();
var usercontroller = require('../Controllers/usercontroller')

//GET
router.get('/form', usercontroller.AddUserForm)

/* GET users listing. */
router.get('/getusers', usercontroller.GetUsers)

//Post
router.post('/adduser', usercontroller.AddUser)

//Login
router.post('/userlogin', usercontroller.UserLogIn)



module.exports = router;
