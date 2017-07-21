import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer, userIsLoadingReducer, userLogInFailReducer, userLogInSuccessReducer } from './userReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userIsLoading: userIsLoadingReducer,
  userFail: userLogInFailReducer,
  userSuccess: userLogInSuccessReducer
})
