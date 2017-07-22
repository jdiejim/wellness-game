const express = require('express');
const router = express.Router();
const SessionController = require('./controllers/SessionController');

router.post('/login', SessionController.logInUser);
router.post('/signup', SessionController.signUpUser);

module.exports = router;
