// const Activity = require('../models/Activity');
//
// const create = (res, req, next) => {
//   Activity.createActivity(req.body)
//     .then(data => {
//
//       res.status(200).json({ data });
//     })
//     .catch(error => res.status(500).json({ error }));
// }
//
// module.exports = { create }
//
// //
// // [
// // {
// //     user_id: user.id,
// //     descriotion:
// //     tpye
// //     status
// //   }
// // [
//
// //
// // table.increments('id').primary();
// // table.integer('user_id').unsigned();
// // table.foreign('user_id').references('users.id');
// // table.string('description');
// // table.enu('type', ['rest', 'sweat', 'nutrition', 'personal', 'wildcard']);
// // table.boolean('status').defaultTo(false);
// // table.integer('points').defaultTo(5);
