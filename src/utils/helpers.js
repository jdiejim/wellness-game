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
