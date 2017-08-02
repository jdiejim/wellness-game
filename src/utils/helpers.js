import rest from '../assets/rest.svg';
import nutrition from '../assets/nutrition.svg';
import personal from '../assets/personal.svg';
import sweat from '../assets/sweat.svg';
import gold from '../assets/gold.svg';
import silver from '../assets/silver.svg';
import bronze from '../assets/bronze.svg';
import moment from 'moment';

export const getCrown = (num) => {
  switch (num) {
    case 0:
      return gold;
    case 1:
      return silver;
    default:
      return bronze;
  }
}

const colors = [
  '#F34336',
  '#E81E63',
  '#9C27B0',
  '#3F51B4',
  '#2196F2',
  '#03A8F3',
  '#00BBD3',
  '#009587',
  '#4CAF50',
  '#8BC24A',
  '#CCDB39',
  '#FEEA3B',
  '#FEC007',
  '#FE9800',
  '#FE5722',
  '#795548',
  '#9D9D9D',
  '#607D8A'
];

export const getRandomNumber = (num) => Math.floor(Math.random() * (num + 1));

export const getRandomColor = () => {
  return colors[getRandomNumber(colors.length - 1)];
}

const icons = {
  rest: { icon: rest, color: '#3F51B5'},
  nutrition: { icon: nutrition, color: '#54b3a7'},
  sweat: { icon: sweat, color: '#2b2b2b'},
  personal: { icon: personal, color: '#f27474'}
};

export const getTypeIcon = (type, status, is_canceled) => {
  if (is_canceled) {
    return {
      backgroundImage: `url(${icons[type].icon})`,
      backgroundColor: '#DBDBDB'
    }
  }

  return {
    backgroundImage: `url(${icons[type].icon})`,
    backgroundColor: status ? icons[type].color : '#a29f9f'
  }
}

export const getBarLabelStyle = (type) => {
  return {
    backgroundImage: `url(${icons[type].icon})`,
    backgroundColor: icons[type].color,
  }
}

export const getBarStyle = (type, width) => {
  return {
    backgroundColor: icons[type].color,
    width
  }
}

export const getBgImage = (icon) => ({ backgroundImage: `url(${icon})` });

export const toggleClass = (bool, class1, class2='') => bool  ? class1 : class2;

const getOverdue = (array) => {
  const today = moment().subtract(1, 'days').format();

  return array.filter(e => moment(e.date).format() < today && !e.status).length;
}

const getCompleted = (array) => array.filter(e => e.status === true).length;

export const getStats = (array) => ({
  total: array.length,
  pending: array.length - getCompleted(array),
  completed: getCompleted(array),
  overdue: getOverdue(array),
});

export const getStatsByType = (array) => array.reduce((obj, e) => {
  if (!obj[e.type]) {
    obj[e.type] = { length: 0, completed: 0 }
  }
  if (e.status) {
    obj[e.type].completed++;
  }
  obj[e.type].length++;

  return obj
}, {});

export const addProgress = (stats) => {
  Object.keys(stats).forEach(key => {
    stats[key].progress = Math.round(stats[key].completed / stats[key].length * 100)
  });

  return stats;
}

export const getProgressByType = (array, action) => {
  return addProgress(getStatsByType(array))
}
