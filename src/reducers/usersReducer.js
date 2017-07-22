import { GET_USERS, USERS_ARE_LOADING, USERS_FETCH_FAIL, USERS_FETCH_SUCCESS } from '../utils/constants';

export const usersReducer = (state=[], action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.users];
    default:
      return state;
  }
}

export const usersAreLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case USERS_ARE_LOADING:
      return action.usersAreLoading;
    default:
      return state;
  }
}

export const usersFetchFailReducer = (state=false, action) => {
  switch (action.type) {
    case USERS_FETCH_FAIL:
      return action.usersFail;
    default:
      return state;
  }
}

export const usersFetchSuccessReducer = (state=false, action) => {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return action.usersSuccess;
    default:
      return state;
  }
}
