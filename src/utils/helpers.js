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
