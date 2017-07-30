import {
  ADD_ACTIVITIES,
  ACTIVITIES_ARE_LOADING,
  ADD_ACTIVITIES_FAIL,
  ADD_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES,
  UPDATE_FAIL,
  UPDATE_CANCEL_FAIL,
  GET_LEADER_BOARDS,
  LEADER_BOARDS_ARE_LOADING,
  LEADER_BOARDS_FAIL,
  USER_MONTHLY_ACTIVITIES,
  USER_MONTHLY_ACTIVITIES_ARE_LOADING,
  USER_MONTHLY_ACTIVITIES_FAIL
} from '../utils/constants';

export const activitiesReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_ACTIVITIES:
      return [...action.activities];
    case GET_ACTIVITIES:
      return [...action.activities];
    default:
      return state;
  }
}

export const activitiesAreLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case ACTIVITIES_ARE_LOADING:
      return action.activitiesAreLoading;
    default:
      return state;
  }
}

export const addActivitiesFailReducer = (state=false, action) => {
  switch (action.type) {
    case ADD_ACTIVITIES_FAIL:
      return action.addActivitiesFail;
    default:
      return state;
  }
}

export const addActivitiesSuccessReducer = (state=false, action) => {
  switch (action.type) {
    case ADD_ACTIVITIES_SUCCESS:
      return action.addActivitiesSuccess;
    default:
      return state;
  }
}

export const updateStatusReducer = (state=false, action) => {
  switch (action.type) {
    case UPDATE_FAIL:
      return action.updateFail;
    default:
      return state;
  }
}

export const updateCancelReducer = (state=false, action) => {
  switch (action.type) {
    case UPDATE_CANCEL_FAIL:
      return action.updateCancel;
    default:
      return state;
  }
}

export const leaderboardsReducer = (state=[], action) => {
  switch (action.type) {
    case GET_LEADER_BOARDS:
      return action.leaderboards;
    default:
      return state;
  }
}

export const leaderboardsLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case LEADER_BOARDS_ARE_LOADING:
      return action.leaderboardsLoading;
    default:
      return state;
  }
}

export const leaderboardsFailReducer = (state=false, action) => {
  switch (action.type) {
    case LEADER_BOARDS_FAIL:
      return action.leaderboardsFail;
    default:
      return state;
  }
}

export const monthlyActivitiesReducer = (state=[], action) => {
  switch (action.type) {
    case USER_MONTHLY_ACTIVITIES:
      return action.monthlyActivities;
    default:
      return state;
  }
}

export const monthlyActivitiesLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case USER_MONTHLY_ACTIVITIES_ARE_LOADING:
      return action.monthlyActivitiesLoading;
    default:
      return state;
  }
}

export const monthlyActivitiesFailReducer = (state=false, action) => {
  switch (action.type) {
    case USER_MONTHLY_ACTIVITIES_FAIL:
      return action.monthlyActivitiesFail;
    default:
      return state;
  }
}
