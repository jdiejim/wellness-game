import * as _ from '../../reducers/usersReducer';
import { users } from '../stubs';
import {
  GET_USERS,
  USERS_ARE_LOADING,
  USERS_FETCH_FAIL
} from '../../utils/constants';

describe('usersReducer', () => {
  it('should return initial state', () => {

    expect(_.usersReducer(undefined, {})).toEqual([]);
  });

  it('should return state with a new array of users', () => {
    const action = { users, type: GET_USERS };

    expect(_.usersReducer(undefined, action)).toEqual(users);
  });
});

describe('usersAreLoadingReducer', () => {
  it('should return initial state', () => {

    expect(_.usersAreLoadingReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if users are loading', () => {
    const action = { usersAreLoading: true, type: USERS_ARE_LOADING };

    expect(_.usersAreLoadingReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if users are done loading', () => {
    const action = { usersAreLoading: false, type: USERS_ARE_LOADING };

    expect(_.usersAreLoadingReducer(undefined, action)).toEqual(false);
  });
});

describe('usersFetchFailReducer', () => {
  it('should return initial state', () => {

    expect(_.usersFetchFailReducer(undefined, {})).toEqual(false)
  });

  it('should return state with true if users fetch fails', () => {
    const action = { usersFail: true, type: USERS_FETCH_FAIL };

    expect(_.usersFetchFailReducer(undefined, action)).toEqual(true);
  });

  it('should return state with false if users fetch does not fail', () => {
    const action = { usersFail: false, type: USERS_FETCH_FAIL };

    expect(_.usersFetchFailReducer(undefined, action)).toEqual(false);
  });
});
