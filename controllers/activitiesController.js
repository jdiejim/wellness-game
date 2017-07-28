const Activity = require('../models/Activity');

const create = (req, res, next) => {
  Activity.createActivity(req.body)
    .then(data => {
      const activities = data.map(activity => activity[0]);

      res.status(200).json({ activities });
    })
    .catch(error => res.status(500).json({ error }));
}

const indexByDate = (req, res, next) => {
  Activity.getUserActivitiesByDate(req.body)
    .then(activities => {
      res.status(200).json({ activities });
    })
    .catch(error => res.status(500).json({ error }));
}

const indexWeeklyChallenge = (req, res, next) => {
  Activity.getWeeklyLeaders(req.body)
    .then(data => {
      res.status(200).json({ data })
    })
    .catch(error => res.status(500).json({ error }));
}

const indexUserWeeklyActivities = (req, res, next) => {
  Activity.getWeeklyActivities(req.body)
    .then(activities => {
      res.status(200).json({ activities })
    })
    .catch(error => res.status(500).json({ error }))
}

const updateActivityStatus = (req, res, next) => {
  Activity.changeActivityStatus(req.body)
    .then(data => {
      res.status(200).json({ data })
    })
    .catch(error => res.status(500).json({ error }))
}

const updateActivityIsCanceled= (req, res, next) => {
  Activity.changeCancelActivity(req.body)
    .then(data => {
      res.status(200).json({ data })
    })
    .catch(error => res.status(500).json({ error }))
}

module.exports = { create, indexByDate, indexWeeklyChallenge, indexUserWeeklyActivities, updateActivityStatus, updateActivityIsCanceled }
