// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const db = require('knex')(configuration);
//
//
// // const userTemplate = ({ id, first_name, last_name, email, avatar }) => ({ id, first_name, last_name, email, avatar });
//
// // const getUser = ({ email, password: raw }) => {
// //   const password = hash(raw);
// //
// //   return db('users').where({ email, password }).select();
// // }
//
// const createUser = (body) => {
//   body.password = hash(body.password);
//
//   return db('users').insert(body, ['id', 'first_name', 'last_name', 'email', 'avatar']);
// }
//
// module.exports = { userTemplate, createUser, getUser };