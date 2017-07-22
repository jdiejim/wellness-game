const Activity = require('../models/Activity');

const create = (req, res, next) => {
  Activity.createActivity(req.body)
    .then(activities => {

      res.status(200).json({ activities });
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports = { create }
