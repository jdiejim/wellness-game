import React from 'react';
import Leaderboards from '../../components/Leaderboards';
import { shallow } from 'enzyme';
import { leaderboards } from '../stubs';

describe('Leaderboards', () => {
  it('should render the component when it mounts', () => {
    const wrapper = shallow(<Leaderboards leaderboards={leaderboards} />);

    expect(wrapper.find('.leaderboards').length).toBe(1);
  });

  it('should not render leaderboard if no data', () => {
    const wrapper = shallow(<Leaderboards leaderboards={[]} />);

    expect(wrapper.find('.leaderboards').length).toBe(0);
  });

  it('should render the correct amout of leaders', () => {
    const wrapper = shallow(<Leaderboards leaderboards={leaderboards} />);

    expect(wrapper.find('LeaderCell').length).toBe(15);
  });

  it('should render the correct columns', () => {
    const wrapper = shallow(<Leaderboards leaderboards={leaderboards} />);
    const completed = wrapper.find('.leaderboards-column-name').get(0).props.children
    const total = wrapper.find('.leaderboards-column-name').get(1).props.children
    const progress = wrapper.find('.leaderboards-column-name').get(2).props.children

    expect(completed).toBe('Completed');
    expect(total).toBe('Total');
    expect(progress).toBe('Progress');
  });
})
