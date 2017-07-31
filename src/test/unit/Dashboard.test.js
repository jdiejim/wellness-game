import React from 'react';
import Dashboard from '../../components/Dashboard';
import { shallow } from 'enzyme';
import { userWeeklyActivities } from '../stubs';

describe('Dashboard', () => {
  it('should render the component when it mounts', () => {
    const wrapper = shallow(
      <Dashboard
        selectedDate={''}
        user={{}}
        userWeeklyActivities={userWeeklyActivities}
        dashDate={''}
      />);

    expect(wrapper.find('.dashboard').length).toBe(1);
  });

  it('should not render leaderboard if no data', () => {
    const wrapper = shallow(
      <Dashboard
        selectedDate={''}
        user={{}}
        userWeeklyActivities={userWeeklyActivities}
        dashDate={''}
      />);

      const pending = wrapper.find('.totals-cell-value').get(0).props.children;
      const completed = wrapper.find('.totals-cell-value').get(1).props.children;
      const overdue = wrapper.find('.totals-cell-value').get(2).props.children;

    expect(pending).toBe(15);
    expect(completed).toBe(13);
    expect(overdue).toBe(15);
  });
})
