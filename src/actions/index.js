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
  USER_WEEKLY_ACTIVITIES,
  USER_WEEKLY_ACTIVITIES_ARE_LOADING,
  USER_WEEKLY_ACTIVITIES_FAIL,
  UPDATE_FAIL,
  UPDATE_CANCEL_FAIL,
  SELECT_DASH_DATE,
  GET_LEADER_BOARDS,
  LEADER_BOARDS_ARE_LOADING,
  LEADER_BOARDS_FAIL,
  USER_MONTHLY_ACTIVITIES,
  USER_MONTHLY_ACTIVITIES_ARE_LOADING,
  USER_MONTHLY_ACTIVITIES_FAIL
} from '../utils/constants';

export const logIn = (user) => ({ type: LOG_IN, user });
export const logOut = () => ({ type: LOG_OUT });
export const userIsLoading = (bool) => ({ type: USER_IS_LOADING, userIsLoading: bool });
export const userLogInFail = (bool) => ({ type: USER_LOGIN_FAIL, userFail: bool });
export const userLogInSuccess = (bool) => ({ type: USER_LOGIN_SUCCESS, userSuccess: bool });

export const logInUser = (body) => {
  return dispatch => {
    dispatch(userIsLoading(true));
    fetch('api/v1/login', {
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

export const updateStatusFail = (bool) => ({ type: UPDATE_FAIL, updateFail: bool })

export const updateStatus = (body, weekBody) => {
  return dispatch => {
    fetch('api/v1/activities/user/status', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(updateStatusFail(false));
      dispatch(fetchWeeklyActivities(weekBody));
      return res.json();
    })
    .catch(err => {
      dispatch(updateStatusFail(true));
    });
  }
}

export const updateCancelFail = (bool) => ({ type: UPDATE_CANCEL_FAIL, updateCancel: bool })

export const updateCancel = (body, weekBody) => {
  return dispatch => {
    fetch('api/v1/activities/user/cancel', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(updateCancelFail(false));
      dispatch(fetchWeeklyActivities(weekBody));
      return res.json();
    })
    .catch(err => {
      dispatch(updateCancelFail(true));
    });
  }
}

export const changeDashDate = (dashDate) => ({ type: SELECT_DASH_DATE, dashDate });

export const getLeaderboards = (leaderboards) => ({ type: GET_LEADER_BOARDS, leaderboards });
export const leaderboardsAreLoading = (bool) => ({ type: LEADER_BOARDS_ARE_LOADING, leaderboardsLoading: bool });
export const leaderboardsFail = (bool) => ({ type: LEADER_BOARDS_FAIL, leaderboardsFail: bool });

export const fetchLeaderboards = (body) => {
  return dispatch => {
    dispatch(leaderboardsAreLoading(true));
    fetch('api/v1/activities/leaders', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(leaderboardsAreLoading(false));
      return res.json();
    })
    .then(({ leaderboards }) => {
      dispatch(leaderboardsFail(false));
      dispatch(getLeaderboards(leaderboards));
    })
    .catch(err => {
      dispatch(leaderboardsFail(true));
    });
  }
}

export const getMonthlyActivities = (monthlyActivities) => ({ type: USER_MONTHLY_ACTIVITIES, monthlyActivities });
export const monthlyActivitiesAreLoading = (bool) => ({ type: USER_MONTHLY_ACTIVITIES_ARE_LOADING, monthlyActivitiesLoading: bool });
export const monthlyActivitiesFail = (bool) => ({ type: USER_MONTHLY_ACTIVITIES_FAIL, monthlyActivitiesFail: bool });

export const fetchMonthlyActivities = (body) => {
  return dispatch => {
    dispatch(monthlyActivitiesAreLoading(true));
    fetch('api/v1/activities/month', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      dispatch(monthlyActivitiesAreLoading(false));
      return res.json();
    })
    .then(({ activities }) => {
      dispatch(monthlyActivitiesFail(false));
      dispatch(getMonthlyActivities(activities));
    })
    .catch(err => {
      dispatch(monthlyActivitiesFail(true));
    });
  }
}
