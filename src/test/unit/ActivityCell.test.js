import React from 'react';
import ActivityCell from '../../components/ActivityCell';
import { shallow } from 'enzyme';
import { leaderboards } from '../stubs';

describe('ActivityCell', () => {
  const activity = {
    type: 'rest',
    'description': 'sleep +7'
  }
  it('should render the component when it mounts', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
      />);

    expect(wrapper.find('.list-item').length).toBe(1);
  });

  it('should have initial state', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
      />);

    const expected = {
      id: '',
      isCompleted: false,
      isCanceled: false,
    }

    expect(wrapper.state()).toEqual(expected);
  });

  it('should render the correct description', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
      />);

    const description = wrapper.find('.description').props().children;

    expect(description).toEqual('sleep +7');
  });

  it('should render the correct icon', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
      />);

    const icon = wrapper.find('.activity-type').props().style.backgroundImage;

    expect(icon.includes('rest')).toBe(true);
  });

  it('should update state when status completed', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
        updateCancel={() => null}
        updateStatus={() => null}
      />);
    const completeBtn = wrapper.find('#success-btn');

    completeBtn.simulate('click');

    expect(wrapper.state('isCompleted')).toBe(true);
  });

  it('should update state when cancel clicked', () => {
    const wrapper = shallow(
      <ActivityCell
        activity={activity}
        updateCancel={() => null}
        updateStatus={() => null}
      />);
    const cancelBtn = wrapper.find('#cancel-btn');

    cancelBtn.simulate('click');

    expect(wrapper.state('isCanceled')).toBe(true);
  });
});
