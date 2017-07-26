import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  USER_IS_LOADING,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  GET_USERS,
  USERS_ARE_LOADING,
  USERS_FETCH_FAIL,
  USERS_FETCH_SUCCESS,
  ADD_ACTIVITIES,
  ACTIVITIES_ARE_LOADING,
  ADD_ACTIVITIES_FAIL,
  ADD_ACTIVITIES_SUCCESS,
  SELECT_DATE,
  CHANGE_MONTH,
  SELECT_MONTH,
  TODAY,
  GET_ACTIVITIES,
  USER_WEEKLY_POINTS,
  USER_WEEKLY_POINTS_ARE_LOADING,
  USER_WEEKLY_POINTS_FAIL,
  USER_WEEKLY_MAX_POINTS,
  USER_WEEKLY_MAX_POINTS_ARE_LOADING,
  USER_WEEKLY_MAX_POINTS_FAIL,
  USER_WEEKLY_ACTIVITIES,
  USER_WEEKLY_ACTIVITIES_ARE_LOADING,
  USER_WEEKLY_ACTIVITIES_FAIL
} from '../utils/constants';

export const logIn = (user) => ({ type: LOG_IN, user });
export const logOut = () => ({ type: LOG_OUT });
export const userIsLoading = (bool) => ({ type: USER_IS_LOADING, userIsLoading: bool });
export const userLogInFail = (bool) => ({ type: USER_LOGIN_FAIL, userFail: bool });
export const userLogInSuccess = (bool) => ({ type: USER_LOGIN_SUCCESS, userSuccess: bool });

export const logInUser = (body) => {
  return dispatch => {
    dispatch(userIsLoading(true));
    fetch('/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(userIsLoading(false));
      return res.json();
    })
    .then(({ user }) => {
      dispatch(userLogInSuccess(true));
      dispatch(userLogInFail(false));
      dispatch(logIn(user));
    })
    .catch(err => {
      dispatch(userLogInFail(true));
      dispatch(userLogInSuccess(false));
    });
  }
}

export const signUp = (user) => ({ type: SIGN_UP, user });

export const signUpUser = (body) => {
  return dispatch => {
    dispatch(userIsLoading(true));
    fetch('api/v1/users', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(userIsLoading(false));
      return res.json();
    })
    .then(({ user }) => {
      dispatch(userLogInSuccess(true));
      dispatch(userLogInFail(false));
      dispatch(signUp(user));
    })
    .catch(err => {
      dispatch(userLogInFail(true));
      dispatch(userLogInSuccess(false));
    });
  }
}

export const getUsers = (users) => ({ type: GET_USERS, users });
export const usersAreLoading = (bool) => ({ type: USERS_ARE_LOADING, usersAreLoading: bool });
export const usersFetchFail = (bool) => ({ type: USERS_FETCH_FAIL, usersFail: bool });
export const usersFetchSuccess = (bool) => ({ type: USERS_FETCH_SUCCESS, usersSuccess: bool });

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(usersAreLoading(true));
    fetch('api/v1/users')
      .then(res => {
        dispatch(usersAreLoading(false));
        return res.json();
      })
      .then(({ users }) => {
        dispatch(usersFetchSuccess(true));
        dispatch(usersFetchFail(false));
        dispatch(getUsers(users));
      })
      .catch(err => {
        dispatch(usersFetchFail(true));
        dispatch(usersFetchSuccess(false));
      })
  }
}

export const addActivities = (activities) => ({ type: ADD_ACTIVITIES, activities });
export const activitiesAreLoading = (bool) => ({ type: ACTIVITIES_ARE_LOADING, activitiesAreLoading: bool });
export const addActivitiesFail = (bool) => ({ type: ADD_ACTIVITIES_FAIL, addActivitiesFail: bool });
export const addActivitiesSuccess = (bool) => ({ type: ADD_ACTIVITIES_SUCCESS, addActivitiesSuccess: bool });

export const createActivities = (body) => {
  return dispatch => {
    dispatch(activitiesAreLoading(true));
    fetch('api/v1/activities', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(activitiesAreLoading(false));
      return res.json();
    })
    .then(({ activities }) => {
      dispatch(addActivitiesSuccess(true));
      dispatch(addActivitiesFail(false));
      dispatch(addActivities(activities));
    })
    .catch(err => {
      dispatch(addActivitiesFail(true));
      dispatch(addActivitiesSuccess(false));
    });
  }
}

export const getActivitiesByDate = (activities) => ({ type: GET_ACTIVITIES, activities });
export const fetchActivities = (body) => {
  return dispatch => {
    dispatch(activitiesAreLoading(true));
    fetch('api/v1/activities/date', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(activitiesAreLoading(false));
      return res.json();
    })
    .then(({ activities }) => {
      dispatch(addActivitiesFail(false));
      dispatch(getActivitiesByDate(activities));
    })
    .catch(err => {
      dispatch(addActivitiesFail(true));
      dispatch(addActivitiesSuccess(false));
    });
  }
}

export const selectDate = (date) => ({ type: SELECT_DATE, date });
export const getToday = () => ({ type: TODAY });
export const selectMonth = (selectedMonth) => ({ type: SELECT_MONTH, selectedMonth });
export const changeMonth = (daysList) => ({ type: CHANGE_MONTH, daysList });

export const getWeeklyPoints = (userWeeklyPoints) => ({ type: USER_WEEKLY_POINTS, userWeeklyPoints });
export const weeklyPointsFailAreLoading = (bool) => ({ type: USER_WEEKLY_POINTS_ARE_LOADING, userWeeklyLoading: bool });
export const weeklyPointsFail = (bool) => ({ type: USER_WEEKLY_POINTS_FAIL, userWeeklyFail: bool });

export const fetchWeeklyPoints = (body) => {
  return dispatch => {
    dispatch(weeklyPointsFailAreLoading(true));
    fetch('api/v1/activities/user/points/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(weeklyPointsFailAreLoading(false));
      return res.json();
    })
    .then(({ sum }) => {
      dispatch(weeklyPointsFail(false));
      dispatch(getWeeklyPoints(sum));
    })
    .catch(err => {
      dispatch(weeklyPointsFail(true));
    });
  }
}

export const getWeeklyMaxPoints = (userMaxPoints) => ({ type: USER_WEEKLY_MAX_POINTS, userMaxPoints });
export const weeklyMaxPointsAreLoading = (bool) => ({ type: USER_WEEKLY_MAX_POINTS_ARE_LOADING, userWeeklyMaxLoading: bool });
export const weeklyMaxPointsFail = (bool) => ({ type: USER_WEEKLY_MAX_POINTS_FAIL, userWeeklyMaxFail: bool });

export const fetchWeeklyMaxPoints = (body) => {
  return dispatch => {
    dispatch(weeklyMaxPointsAreLoading(true));
    fetch('api/v1/activities/user/points/total', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(weeklyMaxPointsAreLoading(false));
      return res.json();
    })
    .then(({ sum }) => {
      dispatch(weeklyMaxPointsFail(false));
      dispatch(getWeeklyMaxPoints(sum));
    })
    .catch(err => {
      dispatch(weeklyMaxPointsFail(true));
    });
  }
}

export const getWeeklyActivities = (userWeeklyActivities) => ({ type: USER_WEEKLY_ACTIVITIES, userWeeklyActivities });
export const weeklyActivitiesAreLoading = (bool) => ({ type: USER_WEEKLY_ACTIVITIES_ARE_LOADING, userWeeklyActivitiesLoading: bool });
export const weeklyActivitiesFail = (bool) => ({ type: USER_WEEKLY_ACTIVITIES_FAIL, userWeeklyActivitiesFail: bool });

export const fetchWeeklyActivities = (body) => {
  return dispatch => {
    dispatch(weeklyActivitiesAreLoading(true));
    fetch('api/v1/activities/week', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(weeklyActivitiesAreLoading(false));
      return res.json();
    })
    .then(({ activities }) => {
      dispatch(weeklyActivitiesFail(false));
      dispatch(getWeeklyActivities(activities));
    })
    .catch(err => {
      dispatch(weeklyActivitiesFail(true));
    });
  }
}
