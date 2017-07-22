const express = require('express');
const router = express.Router();
const sessionsController = require('./controllers/sessionsController');
const usersController = require('./controllers/usersController');
const activitiesController = require('./controllers/activitiesController');

router.post('/login', sessionsController.createSession);
router.post('/users', usersController.create);
router.get('/users', usersController.index);
router.post('/activities', activitiesController.create);

module.exports = router;
 
