import * as _ from '../../reducers/activitiesReducer';
import {
  ADD_ACTIVITIES,
  ACTIVITIES_ARE_LOADING,
  ADD_ACTIVITIES_FAIL,
  GET_ACTIVITIES,
  UPDATE_FAIL,
  UPDATE_CANCEL_FAIL,
  GET_LEADER_BOARDS,
  LEADER_BOARDS_ARE_LOADING,
  LEADER_BOARDS_FAIL,
  USER_MONTHLY_ACTIVITIES,
  USER_MONTHLY_ACTIVITIES_ARE_LOADING,
  USER_MONTHLY_ACTIVITIES_FAIL
} from '../../utils/constants';

describe('activitiesReducer', () => {
  it('should return initial state', () => {

    expect(_.activitiesReducer(undefined, {})).toEqual([])
  });

  it('should return state with a new activity when added', () => {
    const activities = ['sleep +7', 'eat healthy']
    const action = { activities, type: ADD_ACTIVITIES };

    expect(_.activitiesReducer(undefined, action)).toEqual(activities);
  });

  it('should return state with a new activity when called', () => {
    const activities = ['sleep +7', 'eat healthy']
    const action = { activities, type: GET_ACTIVITIES };

    expect(_.activitiesReducer(undefined, action)).toEqual(activities);
  });
});

describe('activitiesAreLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.activitiesAreLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if activities are loading', () => {
    const action = { activitiesAreLoading: true, type: ACTIVITIES_ARE_LOADING };

    expect(_.activitiesAreLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if activities are done loading', () => {
    const action = { activitiesAreLoading: false, type: ACTIVITIES_ARE_LOADING };

    expect(_.activitiesAreLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('addActivitiesFailReducer', () => {
  it('should return initial state', () => {

    expect(_.addActivitiesFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if activities fetch fails', () => {
    const action = { addActivitiesFail: true, type: ADD_ACTIVITIES_FAIL };

    expect(_.addActivitiesFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if activities fetch does not fail', () => {
    const action = { addActivitiesFail: false, type: ADD_ACTIVITIES_FAIL };

    expect(_.addActivitiesFailReducer(undefined, action)).toEqual(false);
  });
});

describe('updateStatusReducer', () => {
  it('should return initial state', () => {

    expect(_.updateStatusReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if update status fails', () => {
    const action = { updateFail: true, type: UPDATE_FAIL };

    expect(_.updateStatusReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if update status fails', () => {
    const action = { updateFail: false, type: UPDATE_FAIL };

    expect(_.updateStatusReducer(undefined, action)).toEqual(false);
  });
});

describe('updateCancelReducer', () => {
  it('should return initial state', () => {

    expect(_.updateCancelReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if update cancel fails', () => {
    const action = { updateCancel: true, type: UPDATE_CANCEL_FAIL };

    expect(_.updateCancelReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if update cancel fails', () => {
    const action = { updateCancel: false, type: UPDATE_CANCEL_FAIL };

    expect(_.updateCancelReducer(undefined, action)).toEqual(false);
  });
});

describe('leaderboardsReducer', () => {
  it('should return initial state', () => {

    expect(_.leaderboardsReducer(undefined, {})).toEqual([])
  });

  it('should return state with a new leaderboards when fetched', () => {
    const leaderboards = ['Darth Vader', 'Han Solo']
    const action = { leaderboards, type: GET_LEADER_BOARDS };

    expect(_.leaderboardsReducer(undefined, action)).toEqual(leaderboards);
  });
});

describe('leaderboardsLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.leaderboardsLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if leaderboards are loading', () => {
    const action = { leaderboardsLoading: true, type: LEADER_BOARDS_ARE_LOADING };

    expect(_.leaderboardsLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if leaderboards are done loading', () => {
    const action = { leaderboardsLoading: false, type: LEADER_BOARDS_ARE_LOADING };

    expect(_.leaderboardsLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('leaderboardsFailReducer', () => {
  it('should return initial state', () => {

    expect(_.leaderboardsFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if leaderboards fetch fails', () => {
    const action = { leaderboardsFail: true, type: LEADER_BOARDS_FAIL };

    expect(_.leaderboardsFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if leaderboards fetch does not fail', () => {
    const action = { leaderboardsFail: false, type: LEADER_BOARDS_FAIL };

    expect(_.leaderboardsFailReducer(undefined, action)).toEqual(false);
  });
});

describe('monthlyActivitiesReducer', () => {
  it('should return initial state', () => {

    expect(_.monthlyActivitiesReducer(undefined, {})).toEqual([])
  });

  it('should return state with a new monthly activities when fetched', () => {
    const monthlyActivities = ['Darth Vader', 'Han Solo']
    const action = { monthlyActivities, type: USER_MONTHLY_ACTIVITIES };

    expect(_.monthlyActivitiesReducer(undefined, action)).toEqual(monthlyActivities);
  });
});

describe('monthlyActivitiesLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.monthlyActivitiesLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if monthly activities are loading', () => {
    const action = { monthlyActivitiesLoading: true, type: USER_MONTHLY_ACTIVITIES_ARE_LOADING };

    expect(_.monthlyActivitiesLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if monthly activities are done loading', () => {
    const action = { monthlyActivitiesLoading: false, type: USER_MONTHLY_ACTIVITIES_ARE_LOADING };

    expect(_.monthlyActivitiesLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('monthlyActivitiesFailReducer', () => {
  it('should return initial state', () => {

    expect(_.monthlyActivitiesFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if montly activities fetch fails', () => {
    const action = { monthlyActivitiesFail: true, type: USER_MONTHLY_ACTIVITIES_FAIL };

    expect(_.monthlyActivitiesFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if montly activities fetch does not fail', () => {
    const action = { monthlyActivitiesFail: false, type: USER_MONTHLY_ACTIVITIES_FAIL };

    expect(_.monthlyActivitiesFailReducer(undefined, action)).toEqual(false);
  });
});
