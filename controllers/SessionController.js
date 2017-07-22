const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const crypto = require('crypto');
const db = require('knex')(configuration);

const hash = (password) => crypto.createHash('sha1').update(password).digest('base64');
const getUser = ({ id, first_name, last_name, email, avatar }) => ({ id, first_name, last_name, email, avatar });

const logInUser = (req, res, next) => {
  const { email, password: raw } = req.body;
  const password = hash(raw);

  db('users').where({ email, password }).select()
    .then(data => {
      const user = getUser(data[0]);

      res.status(200).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
}

const signUpUser = (req, res, next) => {
  const user = req.body;

  user.password = hash(user.password);
  
  db('users').insert(user, ['id', 'first_name', 'last_name', 'email', 'avatar'])
    .then(data => {
      const user = getUser(data[0]);
      console.log(user);

      res.status(200).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
}

module.exports = { logInUser, signUpUser };
