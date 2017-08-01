import rest from '../assets/rest.svg';
import nutrition from '../assets/nutrition.svg';
import personal from '../assets/personal.svg';
import sweat from '../assets/sweat.svg';
import gold from '../assets/gold.svg';
import silver from '../assets/silver.svg';
import bronze from '../assets/bronze.svg';

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

export const getBgImage = (icon) => ({ backgroundImage: `url(${icon})` });
export const toggleClass = (bool, class1, class2='') => bool  ? class1 : class2;
