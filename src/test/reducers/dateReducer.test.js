import * as _ from '../../reducers/dateReducer';
import { users } from '../stubs';
import moment from 'moment';
import {
  SELECT_DATE,
  CHANGE_MONTH,
  SELECT_MONTH,
  TODAY,
  SELECT_DASH_DATE
} from '../../utils/constants';

describe('dateReducer', () => {
  const today = moment().format();

  it('should return initial state', () => {

    expect(_.dateReducer(undefined, {})).toEqual(today);
  });

  it('should return state with new date selected', () => {
    const date = '2017-07-24T10:39:35-06:00';
    const action = { date, type: SELECT_DATE };

    expect(_.dateReducer(undefined, action)).toEqual(date);
  });

  it('should return state with new the date of today', () => {
    const action = { type: TODAY };

    expect(_.dateReducer(undefined, action)).toEqual(today);
  });
});

  describe('daysListReducer', () => {
    it('should return initial state', () => {

      expect(_.daysListReducer(undefined, {})).toEqual([]);
    });

    it('should return state with new dateList', () => {
      const daysList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      const action = { daysList, type: CHANGE_MONTH };

      expect(_.daysListReducer(undefined, action)).toEqual(daysList);
    });
});

describe('monthReducer', () => {
  const today = moment().format();

  it('should return initial state', () => {

    expect(_.monthReducer(undefined, {})).toEqual(today);
  });

  it('should return state with new selected month', () => {
    const selectedMonth = 'July';
    const action = { selectedMonth, type: SELECT_MONTH };

    expect(_.monthReducer(undefined, action)).toEqual(selectedMonth);
  });
});

describe('dashDateReducer', () => {
  const today = moment().format();

  it('should return initial state', () => {

    expect(_.dashDateReducer(undefined, {})).toEqual(today);
  });

  it('should return state with new dash date', () => {
    const dashDate = '2017-07-24T10:39:35-06:00';
    const action = { dashDate, type: SELECT_DASH_DATE };

    expect(_.dashDateReducer(undefined, action)).toEqual(dashDate);
  });
});
