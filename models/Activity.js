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

const createActivityBuddy = (activity) => {
  return db('activities').insert(activity, ['id']);
}

const getWeeklyLeaders = ({ date }) => {
  const offset = moment(date).isoWeekday();
  const start = moment(date).subtract(offset - 1, 'days').format();
  const end = moment(date).add(7 - offset, 'days').format();

  return db.with('completed', db.raw(`SELECT user_id, COUNT(status) as completed FROM activities WHERE status = true AND date BETWEEN '${start}' AND '${end}' GROUP BY user_id`))
    .orderBy('completed', 'desc')
    .join('users', 'users.id', '=', 'completed.user_id')
    .from('completed')
    .with('total', db.raw(`SELECT user_id, COUNT(status) as total FROM activities WHERE date BETWEEN '${start}' AND '${end}' GROUP BY user_id`))
    .innerJoin('total', 'users.id', '=', 'total.user_id')
    .select('total.user_id', 'first_name', 'last_name', 'avatar', 'completed', 'total')
}

const getWeeklyActivities = ({ date, user_id }) => {
  const offset = moment(date).isoWeekday();
  const start = moment(date).subtract(offset - 1, 'days').format();
  const end = moment(date).add(7 - offset, 'days').format();

  return db('activities').whereBetween('date', [start, end])
                         .andWhere({ user_id })
                         .orderBy('id', 'asc')
                         .select('user_id', 'activities.id', 'description', 'type', 'status', 'is_canceled', 'date', 'buddy_id', 'buddy_avatar', 'buddy_initials', 'buddy_ref');
}

const getMonthlyActivities = ({ date, user_id }) => {
  const month = moment(date).format('MM');
  const year = moment(date).format('YYYY');
  const start = moment(date).format(`${year}-${month}-01T09:20:56-06:00`);
  const end = moment(start).add(1, 'month').format();

  return db('activities').whereBetween('date', [start, end])
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

const changeActivityBuddy = ({ id, buddy_id, buddy_avatar, buddy_initials }) => {
  return db('activities').where({ id })
                         .update({ buddy_id, buddy_avatar, buddy_initials }, ['*'])
}

const changeActivityBuddyRef = ({ id, buddy_ref }) => {
  return db('activities').where({ id })
                         .update({ buddy_ref }, ['*'])
}

module.exports = { createActivity, getUserActivitiesByDate, getWeeklyLeaders, getWeeklyActivities, changeActivityStatus, changeCancelActivity, getMonthlyActivities, changeActivityBuddy, createActivityBuddy, changeActivityBuddyRef };
