const crypto = require('crypto');

exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(() => {
      return knex('users').del()
    })
    .then(() => {
      return Promise.all(
        users.map(user => {
          return knex('users').insert(user, 'id')
                              .then(data => {
                                return knex('activities').insert(getActivities(data[0]))
                              })
                              .then(() => console.log('Seeding complete!'))
                              .catch(error => console.log('Error seeding data'))
        })
      )
    })
};

var moment = require('moment');
let counter = 0;

const getRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getBoolean = () => {
  const rand = Math.random();
  return rand > 0.5;
}

const rest = [
  'sleep +',
  'sleep at ',
  'sleep before ',
  'take nap of ',
  ]

const getRandomRest = () => rest[getRandomBetween(0, rest.length - 1)];

const sweat = [
  'attend gym: ',
  'run miles: ',
  'pushups reps: ',
  'abs reps: ',
  'swim laps: ',
  'bike miles: '
  ];

const getRandomSweat = () => sweat[getRandomBetween(0, sweat.length - 1)];

const personal = [
  'meditate hours: ',
  'play video games hours: ',
  'study hours: ',
  'watch movies qty: ',
  'code for ',
  'read book chapters: ',
  'cook foods qty: '
  ];

const getRandomPersonal = () => personal[getRandomBetween(0, personal.length - 1)];

const nutrition = [
  'eat salad',
  'eat fruit',
  'eat vegetables',
  'avoid chocolates',
  'avoid candy',
  'drink less sodas',
  'drink more water'
  ];

const buildNutrition = () => nutrition[getRandomBetween(0, personal.length - 1)];
const buildPersonal = () => getRandomPersonal() + getRandomBetween(1, 10);
const buildSweat = () => getRandomSweat() + getRandomBetween(1, 10);
const buildRest = () => getRandomRest() + getRandomBetween(1, 10);

const getActivities = (user_id) => {
  const today = +moment().format('D');
  const array = [];
  const qty = getRandomBetween(10, 30);
  const date = moment().subtract(qty/2, 'days');

  for (let i = 0; i < qty; i++) {
    array.push({
      user_id,
      description: buildRest(),
      type: 'rest',
      status: +moment(date).format('D') > today ? false : getBoolean(),
      points: 5,
      date: date.format(),
    })
    array.push({
      user_id,
      description: buildSweat(),
      type: 'sweat',
      status: +moment(date).format('D') > today ? false : getBoolean(),
      points: 5,
      date: date.format(),
    })
    array.push({
      user_id,
      description: buildNutrition(),
      type: 'nutrition',
      status: +moment(date).format('D') > today ? false : getBoolean(),
      points: 5,
      date: date.format(),
    })
    array.push({
      user_id,
      description: buildPersonal(),
      type: 'personal',
      status: +moment(date).format('D') > today ? false : getBoolean(),
      points: 5,
      date: date.format(),
    })
    date.add(1, 'days')
  }

  return array;
}

const first = [
  'James',
  'Peter',
  'Bruce',
  'Luke',
  'Darth',
  'Leia',
  'Han',
  'Kylo',
  'Chewie',
  'Michael',
  'Dwigth',
  'Jim',
  'Pam'
  ]

  const last = [
  'Jim',
  'Griffin',
  'Wayne',
  'Bond',
  'Vader',
  'Skywalker',
  'Solo',
  'Ren',
  'Bacca',
  'Scott',
  'Shrute',
  'Halpert',
  'Beasly'
  ]

const hash = (password) => crypto.createHash('sha1').update(password).digest('base64');
const getRandomLast = () => last[getRandomBetween(0, last.length - 1)];
const getEmail = (first) => `${first.toLowerCase()}@email.com`;
const getAvatar = (first) => `www.images/${first.toLowerCase()}.com`;
const users = first.map(e => ({
  first_name: e,
  last_name: getRandomLast(),
  email: getEmail(e),
  password: hash('123'),
  avatar: getAvatar(e)
}))
