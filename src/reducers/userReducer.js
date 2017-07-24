import { LOG_IN, LOG_OUT, SIGN_UP, USER_IS_LOADING, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../utils/constants';

export const userReducer = (state={}, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case SIGN_UP:
      return action.user;
    case LOG_OUT:
    console.log('logout');
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
