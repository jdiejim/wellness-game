import { SELECT_DATE, CHANGE_MONTH } from '../utils/constants';
import moment from 'moment';

export const dateReducer = (state=moment().format(), action) => {
  switch (action.type) {
    case SELECT_DATE:
      return moment(action.date).format();
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
