const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const crypto = require('crypto');
const db = require('knex')(configuration);

const hash = (password) => crypto.createHash('sha1').update(password).digest('base64');
const userTemplate = ({ id, first_name, last_name, email, avatar }) => ({ id, first_name, last_name, email, avatar });

exports.getUser = ({ email, password: raw }, res) => {
  const password = hash(raw);

  db('users').where({ email, password }).select()
    .then(data => {
      const user = userTemplate(data[0]);

      res.status(200).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
}

exports.createUser = (body, res) => {
  const { first_name, last_name, email, password, avatar } = body;
  body.password = hash(body.password);

  db('users').insert(body, ['id', 'first_name', 'last_name', 'email', 'avatar'])
    .then(data => {
      const user = userTemplate(data[0]);

      res.status(200).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
}
