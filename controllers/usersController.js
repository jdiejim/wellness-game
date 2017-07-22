const User = require('../models/User');

const create = (req, res, next) => {
  User.createUser(req.body)
    .then(data => {
      const user = User.userTemplate(data[0]);

      res.status(200).json({ user })
    })
    .catch(error => res.status(500).json({ error }));
}

const index = (req, res, next) => {
  User.getUsers()
    .then(data => {
      const users = data.map(user => User.userTemplate(user));

      res.status(200).json({ users });
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports = { create, index };
