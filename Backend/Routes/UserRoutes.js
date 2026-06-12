const express = require('express');
const { SigninController, SignupController } = require('../Controllers/UserController');
const Router = express.Router();


// Importing Controllers
Router.post("/login", SigninController);
Router.post("/signup", SignupController);

module.exports = Router; 