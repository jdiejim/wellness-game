import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dateReducer, daysListReducer, monthReducer } from './dateReducer';
import {
  userReducer,
  userIsLoadingReducer,
  userLogInFailReducer,
  userLogInSuccessReducer,
  userWeeklyPointsReducer,
  userWeeklyPointsLoadingReducer,
  userWeeklyPointsFailReducer,
  userWeeklyMaxPointsReducer,
  userWeeklyMaxPointsLoadingReducer,
  userWeeklyMaxPointsFailReducer,
  userWeeklyActivitiesReducer,
  userWeeklyActivitiesLoadingReducer,
  userWeeklyActivitiesFailReducer
} from './userReducer';
import {
  usersReducer,
  usersAreLoadingReducer,
  usersFetchFailReducer,
  usersFetchSuccessReducer,
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
  userWeeklyPoints: userWeeklyPointsReducer,
  userWeeklyLoading: userWeeklyPointsLoadingReducer,
  userWeeklyFail: userWeeklyPointsFailReducer,
  userMaxPoints: userWeeklyMaxPointsReducer,
  userWeeklyMaxLoading: userWeeklyMaxPointsLoadingReducer,
  userWeeklyMaxFail: userWeeklyMaxPointsFailReducer,
  userWeeklyActivities: userWeeklyActivitiesReducer,
  userWeeklyActivitiesLoading: userWeeklyActivitiesLoadingReducer,
  userWeeklyActivitiesFail: userWeeklyActivitiesFailReducer,
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
