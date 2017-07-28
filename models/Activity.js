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
  const offset = moment(date).isoWeekday();
  const start = moment(date).subtract(offset - 1, 'days').format();
  const end = moment(date).add(7 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .andWhere('status', 'true')
                    .sum('points');
}

const getWeeklyTotalPoints = ({ date, user_id }) => {
  const offset = moment(date).isoWeekday();
  const start = moment(date).subtract(offset - 1, 'days').format();
  const end = moment(date).add(7 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .sum('points');
}

const getWeeklyActivities = ({ date, user_id }) => {
  const offset = moment(date).isoWeekday();
  const start = moment(date).subtract(offset - 1, 'days').format();
  const end = moment(date).add(7 - offset, 'days').format();

  return db('users').join('activities', 'users.id' , '=', 'activities.user_id')
                    .whereBetween('date', [start, end])
                    .andWhere({ user_id })
                    .orderBy('id', 'asc')
                    .select('user_id', 'activities.id', 'description', 'type', 'status', 'is_canceled', 'date');
}

const changeActivityStatus = ({ id, status }) => {
  return db('activities').where({ id })
                         .update({ status }, ['*'])

}

const changeCancelActivity = ({ id, is_canceled }) => {
  if (is_canceled) {
    const status = false;

    return db('activities').where({ id })
                           .update({ is_canceled, status }, ['*'])
  }

  return db('activities').where({ id })
                         .update({ is_canceled }, ['*'])
}

module.exports = { createActivity, getUserActivitiesByDate, getWeeklyLeaders, getWeeklyPoints, getWeeklyTotalPoints, getWeeklyActivities, changeActivityStatus, changeCancelActivity };
