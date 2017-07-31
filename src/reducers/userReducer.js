import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  USER_IS_LOADING,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_WEEKLY_ACTIVITIES,
  USER_WEEKLY_ACTIVITIES_ARE_LOADING,
  USER_WEEKLY_ACTIVITIES_FAIL
} from '../utils/constants';

export const userReducer = (state={}, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case SIGN_UP:
      return action.user;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}

export const userIsLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case USER_IS_LOADING:
      return action.userIsLoading;
    default:
      return state;
  }
}

export const userLogInFailReducer = (state=false, action) => {
  switch (action.type) {
    case USER_LOGIN_FAIL:
      return action.userFail;
    default:
      return state;
  }
}

export const userLogInSuccessReducer = (state=false, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.userSuccess;
    default:
      return state;
  }
}

export const userWeeklyActivitiesReducer = (state=[], action) => {
  switch (action.type) {
    case USER_WEEKLY_ACTIVITIES:
      return action.userWeeklyActivities;
    default:
      return state;
  }
}

export const userWeeklyActivitiesLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case USER_WEEKLY_ACTIVITIES_ARE_LOADING:
      return action.userWeeklyActivitiesLoading;
    default:
      return state;
  }
}

export const userWeeklyActivitiesFailReducer = (state=false, action) => {
  switch (action.type) {
    case USER_WEEKLY_ACTIVITIES_FAIL:
      return action.userWeeklyActivitiesFail;
    default:
      return state;
  }
}
