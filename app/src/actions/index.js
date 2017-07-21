import { LOG_IN, SIGN_UP, USER_IS_LOADING, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../utils/constants';

// User Actions
export const logIn = (user) => ({ type: LOG_IN, user });
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
    fetch('api/v1/singup', {
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
      dispatch(signUp(user));
    })
    .catch(err => {
      dispatch(userLogInFail(true));
      dispatch(userLogInSuccess(false));
    });
  }
}
