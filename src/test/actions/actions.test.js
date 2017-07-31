import * as _ from '../../actions';
import * as t from '../../utils/constants';
import fetchMock from 'fetch-mock';

describe('Log In and Log Out', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type login and user', () => {
    const user = 'user';
    const expected = { type: t.LOG_IN, user };

    expect(_.logIn(user)).toEqual(expected);
  });

  it('should return type logout', () => {
    const expected = { type: t.LOG_OUT };

    expect(_.logOut()).toEqual(expected);
  });

  it('should return type log in loading and bool', () => {
    const userIsLoading = true;
    const expected = { type: t.USER_IS_LOADING, userIsLoading };

    expect(_.userIsLoading(true)).toEqual(expected);
  });

  it('should return type log in fail and bool', () => {
    const userFail = true;
    const expected = { type: t.USER_LOGIN_FAIL, userFail };

    expect(_.userLogInFail(true)).toEqual(expected);
  });

  it('should trigger post when user logs in', () => {
    const body = { email: 'juan@email.com', password: 'password' };

    fetchMock.post('api/v1/login', { status: 200, body });

    const login = _.logInUser(body);

    login(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/login');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Sign Up', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type sign up and user', () => {
    const user = 'user';
    const expected = { type: t.SIGN_UP, user };

    expect(_.signUp(user)).toEqual(expected);
  });

  it('should trigger post when user signs up', () => {
    const body = {
      first_name: 'Juan',
      last_name: 'Jim',
      email: 'juan@email.com',
      password: 'password'
    };

    fetchMock.post('api/v1/users', { status: 200, body });

    const signUp = _.signUpUser(body);

    signUp(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/users');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Get Users', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type get and users', () => {
    const users = 'users';
    const expected = { type: t.GET_USERS, users };

    expect(_.getUsers(users)).toEqual(expected);
  });

  it('should return type users loading and bool', () => {
    const usersAreLoading = true;
    const expected = { type: t.USERS_ARE_LOADING, usersAreLoading };

    expect(_.usersAreLoading(true)).toEqual(expected);
  });

  it('should return type users fail and bool', () => {
    const usersFail = true;
    const expected = { type: t.USERS_FETCH_FAIL, usersFail };

    expect(_.usersFetchFail(true)).toEqual(expected);
  });

  it('should trigger post when fetching users is called', () => {

    fetchMock.get('api/v1/users', { status: 200 });

    const getUsers = _.fetchUsers();

    getUsers(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/users');
  });
});

describe('Add Activities', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type add and activities', () => {
    const activities = 'activities';
    const expected = { type: t.ADD_ACTIVITIES, activities };

    expect(_.addActivities(activities)).toEqual(expected);
  });

  it('should return type activities loading and bool', () => {
    const activitiesAreLoading = true;
    const expected = { type: t.ACTIVITIES_ARE_LOADING, activitiesAreLoading };

    expect(_.activitiesAreLoading(true)).toEqual(expected);
  });

  it('should return type activities fail and bool', () => {
    const addActivitiesFail = true;
    const expected = { type: t.ADD_ACTIVITIES_FAIL, addActivitiesFail };

    expect(_.addActivitiesFail(true)).toEqual(expected);
  });

  it('should trigger post when create activities is called', () => {
    const body = {
      rest: 'sleep',
      nutrition: 'eat',
      sweat: 'gym',
      personal: 'code'
    };

    fetchMock.post('api/v1/activities', { status: 200, body });

    const addActivities = _.createActivities(body);

    addActivities(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Dates', () => {
  it('should return type select and date', () => {
    const date = 'date';
    const expected = { type: t.SELECT_DATE, date };

    expect(_.selectDate(date)).toEqual(expected);
  });

  it('should return type select and month', () => {
    const selectedMonth = 'selectedMonth';
    const expected = { type: t.SELECT_MONTH, selectedMonth };

    expect(_.selectMonth(selectedMonth)).toEqual(expected);
  });

  it('should return type change and daylist', () => {
    const daysList = ['days'];
    const expected = { type: t.CHANGE_MONTH, daysList };

    expect(_.changeMonth(daysList)).toEqual(expected);
  });

  it('should return type select and dashDate', () => {
    const dashDate = 'dashDate';
    const expected = { type: t.SELECT_DASH_DATE, dashDate };

    expect(_.changeDashDate(dashDate)).toEqual(expected);
  });
})

describe('Get Weekly Activities', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type user weekly and activities', () => {
    const userWeeklyActivities = 'userWeeklyActivities';
    const expected = { type: t.USER_WEEKLY_ACTIVITIES, userWeeklyActivities };

    expect(_.getWeeklyActivities(userWeeklyActivities)).toEqual(expected);
  });

  it('should return type activities loading and bool', () => {
    const userWeeklyActivitiesLoading = true;
    const expected = { type: t.USER_WEEKLY_ACTIVITIES_ARE_LOADING, userWeeklyActivitiesLoading };

    expect(_.weeklyActivitiesAreLoading(true)).toEqual(expected);
  });

  it('should return type activities fail and bool', () => {
    const userWeeklyActivitiesFail = true;
    const expected = { type: t.USER_WEEKLY_ACTIVITIES_FAIL, userWeeklyActivitiesFail };

    expect(_.weeklyActivitiesFail(true)).toEqual(expected);
  });

  it('should trigger post when fetch activities is called', () => {
    const body = {
      user_id: 1,
      date: 'date'
    };

    fetchMock.post('api/v1/activities/week', { status: 200, body });

    const fetchActivities = _.fetchWeeklyActivities(body);

    fetchActivities(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities/week');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Update Status and Cancel', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type update fail and bool', () => {
    const updateFail = true;
    const expected = { type: t.UPDATE_FAIL, updateFail };

    expect(_.updateStatusFail(true)).toEqual(expected);
  });

  it('should return type update cancel fail and bool', () => {
    const updateCancel = true;
    const expected = { type: t.UPDATE_CANCEL_FAIL, updateCancel };

    expect(_.updateCancelFail(true)).toEqual(expected);
  });

  it('should trigger put when update status is called', () => {
    const body = { status: true };

    fetchMock.put('api/v1/activities/user/status', { status: 200, body });

    const updateStatus = _.updateStatus(body);

    updateStatus(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities/user/status');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });

  it('should trigger put when update cancel is called', () => {
    const body = { cancel: true };

    fetchMock.put('api/v1/activities/user/cancel', { cancel: 200, body });

    const updateCancel = _.updateCancel(body);

    updateCancel(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities/user/cancel');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Get Leaderboards', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type get leaderboards and leaderboards', () => {
    const leaderboards = 'leaderboards';
    const expected = { type: t.GET_LEADER_BOARDS, leaderboards };

    expect(_.getLeaderboards(leaderboards)).toEqual(expected);
  });

  it('should return type leaderboards loading and bool', () => {
    const leaderboardsLoading = true;
    const expected = { type: t.LEADER_BOARDS_ARE_LOADING, leaderboardsLoading };

    expect(_.leaderboardsAreLoading(true)).toEqual(expected);
  });

  it('should return type leaderboards fail and bool', () => {
    const leaderboardsFail = true;
    const expected = { type: t.LEADER_BOARDS_FAIL, leaderboardsFail };

    expect(_.leaderboardsFail(true)).toEqual(expected);
  });

  it('should trigger post when fetch leaderboards is called', () => {
    const body = { date: 'date' };

    fetchMock.post('api/v1/activities/leaders', { status: 200, body });

    const fetchLeaderboards = _.fetchLeaderboards(body);

    fetchLeaderboards(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities/leaders');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

describe('Get Monthly Activities', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  const dispatch = (action) => action;

  it('should return type get monthly activities and activities', () => {
    const monthlyActivities = 'monthlyActivities';
    const expected = { type: t.USER_MONTHLY_ACTIVITIES, monthlyActivities };

    expect(_.getMonthlyActivities(monthlyActivities)).toEqual(expected);
  });

  it('should return type activities loading and bool', () => {
    const monthlyActivitiesLoading = true;
    const expected = { type: t.USER_MONTHLY_ACTIVITIES_ARE_LOADING, monthlyActivitiesLoading };

    expect(_.monthlyActivitiesAreLoading(true)).toEqual(expected);
  });

  it('should return type activities fail and bool', () => {
    const monthlyActivitiesFail = true;
    const expected = { type: t.USER_MONTHLY_ACTIVITIES_FAIL, monthlyActivitiesFail };

    expect(_.monthlyActivitiesFail(true)).toEqual(expected);
  });

  it('should trigger post when fetch activities is called', () => {
    const body = { date: 'date' };

    fetchMock.post('api/v1/activities/month', { status: 200, body });

    const fetchMonthlyActivities = _.fetchMonthlyActivities(body);

    fetchMonthlyActivities(dispatch);

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('api/v1/activities/month');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});
