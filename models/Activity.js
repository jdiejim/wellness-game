const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);
const moment = require('moment');

const getUserActivitiesByDate = ({ date, user_id }) => {

  return db('activities').where({ date, user_id }).select();
}

const createActivity = (activities) => {
  const promises = activities.map(activity => db('activities').insert(activity, ['user_id', 'description', 'type', 'points', 'status', 'date']));

  return Promise.all(promises);
}

const getWeeklyLeaders = ({ date }) => {
  const offset = moment(date).weekday();
  const start = moment(date).subtract(offset - 1, 'day').format();
  const end = moment(date).add(offset + 1, 'day').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .select('user_id', 'first_name', 'last_name', 'email', 'avatar', 'activities.id', 'description', 'type', 'status', 'points', 'date');
}

const getWeeklyPoints = ({ date, user_id }) => {
  const offset = moment(date).weekday();
  const start = moment(date).subtract(offset, 'days').format();
  const end = moment(date).add(6 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .andWhere('status', 'true')
                    .sum('points');
}

const getWeeklyTotalPoints = ({ date, user_id }) => {
  const offset = moment(date).weekday();
  const start = moment(date).subtract(offset, 'days').format();
  const end = moment(date).add(6 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .sum('points');
}

const getWeeklyActivities = ({ date, user_id }) => {
  const offset = moment(date).weekday();
  const start = moment(date).subtract(offset, 'days').format();
  const end = moment(date).add(6 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .select('user_id', 'activities.id', 'description', 'type', 'status', 'date');
}

module.exports = { createActivity, getUserActivitiesByDate, getWeeklyLeaders, getWeeklyPoints, getWeeklyTotalPoints, getWeeklyActivities };
