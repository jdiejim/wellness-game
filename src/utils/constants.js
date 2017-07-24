export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOG_OUT = 'LOG_OUT';
export const USER_IS_LOADING = 'USER_IS_LOADING';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const USERS_ARE_LOADING = 'USERS_ARE_LOADING';
export const USERS_FETCH_FAIL = 'USERS_FETCH_FAIL';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const ACTIVITIES_ARE_LOADING = 'ACTIVITIES_ARE_LOADING';
export const ADD_ACTIVITIES_FAIL = 'ADD_ACTIVITIES_FAIL';
export const ADD_ACTIVITIES_SUCCESS = 'ADD_ACTIVITIES_SUCCESS';
export const SELECT_DATE = 'SELECT_DATE';
export const CHANGE_MONTH = 'CHANGE_MONTH';
export const SELECT_MONTH = 'SELECT_MONTH';

export const getKey = () => Math.round(Math.random() * Date.now());
