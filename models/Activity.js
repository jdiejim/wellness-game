const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);
const moment = require('moment');

const getToday = () => {
  const now = moment().format("YYYY-MM-DD");

  return db('activities').whereBetween('created_at', [now, `${now} 23:59:59`]).select();
}

const createActivity = (activities) => {
  const promises = activities.map(activity => db('activities').insert(activity, ['user_id', 'description', 'type', 'points', 'status', 'created_at']));

  return Promise.all(promises);
}

module.exports = { createActivity, getToday };
