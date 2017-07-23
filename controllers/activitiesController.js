const Activity = require('../models/Activity');

const create = (req, res, next) => {
  Activity.createActivity(req.body)
    .then(data => {
      const activities = data.map(activity => activity[0]);

      res.status(200).json({ activities });
    })
    .catch(error => res.status(500).json({ error }));
}

const index = (req, res, next) => {
  Activity.getToday(req.body)
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports = { create, index }
