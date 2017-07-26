const express = require('express');
const router = express.Router();
const sessionsController = require('./controllers/sessionsController');
const usersController = require('./controllers/usersController');
const activitiesController = require('./controllers/activitiesController');

router.post('/login', sessionsController.createSession);
router.post('/users', usersController.create);
router.get('/users', usersController.index);
router.post('/activities', activitiesController.create);
router.post('/activities/date', activitiesController.indexByDate);
router.post('/activities/week', activitiesController.indexUserWeeklyActivities);
router.post('/activities/leaders', activitiesController.indexWeeklyChallenge);
router.post('/activities/user/points', activitiesController.userWeeklyPoints);
router.post('/activities/user/points/total', activitiesController.userTotalWeeklyPoints);

module.exports = router;
 
