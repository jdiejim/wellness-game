const express = require('express');
const router = express.Router();
const sessionsController = require('./controllers/sessionsController');
const usersController = require('./controllers/usersController');

router.post('/login', sessionsController.createSession);
router.post('/users', usersController.create);

module.exports = router;
 
