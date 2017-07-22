import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer, userIsLoadingReducer, userLogInFailReducer, userLogInSuccessReducer } from './userReducer';
import { usersReducer, usersAreLoadingReducer, usersFetchFailReducer, usersFetchSuccessReducer } from './usersReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userIsLoading: userIsLoadingReducer,
  userFail: userLogInFailReducer,
  userSuccess: userLogInSuccessReducer,
  users: usersReducer,
  usersAreLoading: usersAreLoadingReducer,
  usersFail: usersFetchFailReducer,
  usersSuccess: usersFetchSuccessReducer
})
