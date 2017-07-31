import * as _ from '../../reducers/userReducer';
import { user, userWeeklyActivities } from '../stubs';
import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  USER_IS_LOADING,
  USER_LOGIN_FAIL,
  USER_WEEKLY_ACTIVITIES,
  USER_WEEKLY_ACTIVITIES_ARE_LOADING,
  USER_WEEKLY_ACTIVITIES_FAIL
} from '../../utils/constants';

describe('userReducer', () => {
  it('should return initial state', () => {

    expect(_.userReducer(undefined, {})).toEqual({})
  });

  it('should return state with a new user on log in', () => {
    const action = { user, type: LOG_IN };

    expect(_.userReducer(undefined, action)).toEqual(user);
  });

  it('should return state with a new user on sign up', () => {
    const action = { user, type: SIGN_UP };

    expect(_.userReducer(undefined, action)).toEqual(user);
  });

  it('should return state with an empty object on log out', () => {
    const action = { type: LOG_OUT };

    expect(_.userReducer(undefined, action)).toEqual({});
  });
});

describe('userIsLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.userIsLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if user is loading', () => {
    const action = { userIsLoading: true, type: USER_IS_LOADING };

    expect(_.userIsLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if user is done loading', () => {
    const action = { userIsLoading: false, type: USER_IS_LOADING };

    expect(_.userIsLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('userLogInFailReducer', () => {
  it('should return initial state', () => {

    expect(_.userLogInFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if user is fetch fails', () => {
    const action = { userFail: true, type: USER_LOGIN_FAIL };

    expect(_.userLogInFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if user is fetch does not fail', () => {
    const action = { userFail: false, type: USER_LOGIN_FAIL };

    expect(_.userLogInFailReducer(undefined, action)).toEqual(false);
  });
});

describe('userWeeklyActivitiesReducer', () => {
  it('should return initial state', () => {

    expect(_.userWeeklyActivitiesReducer(undefined, {})).toEqual([])
  });

  it('should return state with user weekly activities', () => {
    const action = { userWeeklyActivities, type: USER_WEEKLY_ACTIVITIES };

    expect(_.userWeeklyActivitiesReducer(undefined, action)).toEqual(userWeeklyActivities);
  });
});

describe('userWeeklyActivitiesLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.userWeeklyActivitiesLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if activities are loading', () => {
    const action = { userWeeklyActivitiesLoading: true, type: USER_WEEKLY_ACTIVITIES_ARE_LOADING };

    expect(_.userWeeklyActivitiesLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if activities are done loading', () => {
    const action = { userWeeklyActivitiesLoading: false, type: USER_WEEKLY_ACTIVITIES_ARE_LOADING };

    expect(_.userWeeklyActivitiesLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('userWeeklyActivitiesFailReducer', () => {
  it('should return initial state', () => {

    expect(_.userWeeklyActivitiesFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if activities fetch fails', () => {
    const action = { userWeeklyActivitiesFail: true, type: USER_WEEKLY_ACTIVITIES_FAIL };

    expect(_.userWeeklyActivitiesFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if activities fetch does not fail', () => {
    const action = { userWeeklyActivitiesFail: false, type: USER_WEEKLY_ACTIVITIES_FAIL };

    expect(_.userWeeklyActivitiesFailReducer(undefined, action)).toEqual(false);
  });
})
