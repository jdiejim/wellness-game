import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dateReducer, daysListReducer, monthReducer } from './dateReducer';
import {
  userReducer,
  userIsLoadingReducer,
  userLogInFailReducer,
  userLogInSuccessReducer
} from './userReducer';
import {
  usersReducer,
  usersAreLoadingReducer,
  usersFetchFailReducer,
  usersFetchSuccessReducer
} from './usersReducer';
import {
  activitiesReducer,
  activitiesAreLoadingReducer,
  addActivitiesFailReducer,
  addActivitiesSuccessReducer
} from './activitiesReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userIsLoading: userIsLoadingReducer,
  userFail: userLogInFailReducer,
  userSuccess: userLogInSuccessReducer,
  users: usersReducer,
  usersAreLoading: usersAreLoadingReducer,
  usersFail: usersFetchFailReducer,
  usersSuccess: usersFetchSuccessReducer,
  activities: activitiesReducer,
  activitiesAreLoading: activitiesAreLoadingReducer,
  addActivitiesFail: addActivitiesFailReducer,
  addActivitiesSuccess: addActivitiesSuccessReducer,
  selectedDate: dateReducer,
  selectedMonth: monthReducer,
  daysList: daysListReducer
})
