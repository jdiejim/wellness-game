import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  dateReducer,
  daysListReducer,
  monthReducer,
  dashDateReducer
} from './dateReducer';
import {
  userReducer,
  userIsLoadingReducer,
  userLogInFailReducer,
  userLogInSuccessReducer,
  userWeeklyActivitiesReducer,
  userWeeklyActivitiesLoadingReducer,
  userWeeklyActivitiesFailReducer,
  buddyReducer
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
  addActivitiesSuccessReducer,
  updateStatusReducer,
  updateCancelReducer,
  leaderboardsReducer,
  leaderboardsLoadingReducer,
  leaderboardsFailReducer,
  monthlyActivitiesReducer,
  monthlyActivitiesLoadingReducer,
  monthlyActivitiesFailReducer,
  activityReducer
} from './activitiesReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userIsLoading: userIsLoadingReducer,
  userFail: userLogInFailReducer,
  userSuccess: userLogInSuccessReducer,
  userWeeklyActivities: userWeeklyActivitiesReducer,
  userWeeklyActivitiesLoading: userWeeklyActivitiesLoadingReducer,
  userWeeklyActivitiesFail: userWeeklyActivitiesFailReducer,
  monthlyActivities: monthlyActivitiesReducer,
  monthlyActivitiesLoading: monthlyActivitiesLoadingReducer,
  monthlyActivitiesFail: monthlyActivitiesFailReducer,
  users: usersReducer,
  usersAreLoading: usersAreLoadingReducer,
  usersFail: usersFetchFailReducer,
  usersSuccess: usersFetchSuccessReducer,
  activities: activitiesReducer,
  activitiesAreLoading: activitiesAreLoadingReducer,
  addActivitiesFail: addActivitiesFailReducer,
  addActivitiesSuccess: addActivitiesSuccessReducer,
  leaderboards: leaderboardsReducer,
  leaderboardsLoading: leaderboardsLoadingReducer,
  leaderboardsFail: leaderboardsFailReducer,
  updateFail: updateStatusReducer,
  updateCancel: updateCancelReducer,
  selectedDate: dateReducer,
  selectedMonth: monthReducer,
  daysList: daysListReducer,
  dashDate: dashDateReducer,
  buddy: buddyReducer,
  activity: activityReducer
})
