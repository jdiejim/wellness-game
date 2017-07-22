const User = require('../models/User');

const create = (req, res, next) => {
  User.createUser(req.body)
    .then(data => {
      const user = User.userTemplate(data[0]);

      res.status(200).json({ user })
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports = { create };
