import { SELECT_DATE, CHANGE_MONTH, SELECT_MONTH, TODAY } from '../utils/constants';
import moment from 'moment';

export const dateReducer = (state=moment().format(), action) => {
  switch (action.type) {
    case SELECT_DATE:
      return moment(action.date).format();
    case TODAY:
      return moment().format();
    default:
      return state;
  }
}

export const daysListReducer = (state=[], action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      return action.daysList;
    default:
      return state;
  }
}

export const monthReducer = (state=moment().format(), action) => {
  switch (action.type) {
    case SELECT_MONTH:
      return action.selectedMonth;
    default:
      return state;
  }
}
