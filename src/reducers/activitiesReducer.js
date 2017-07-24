import { ADD_ACTIVITIES, ACTIVITIES_ARE_LOADING, ADD_ACTIVITIES_FAIL, ADD_ACTIVITIES_SUCCESS, GET_ACTIVITIES } from '../utils/constants';

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
