import React from 'react';
import LeaderCell from '../../components/LeaderCell';
import { shallow } from 'enzyme';
import { leaderboards } from '../stubs';

describe('LeaderCell', () => {
  it('should render the component when it mounts', () => {
    const wrapper = shallow(<LeaderCell leader={leaderboards[0]} />);

    expect(wrapper.find('.leader-cell').length).toBe(1);
  });

  it('should not render crown if index larger than 3', () => {
    const crownFull = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);
    const crownLess = shallow(<LeaderCell index={3} leader={leaderboards[0]} />);

    expect(crownFull.find('.crown').length).toBe(1);
    expect(crownLess.find('.crown').length).toBe(0);
  });

  it('should render correct crown icon for the first 3 positions', () => {
    const first = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);
    const second = shallow(<LeaderCell index={1} leader={leaderboards[0]} />);
    const third = shallow(<LeaderCell index={2} leader={leaderboards[0]} />);
    const gold = first.find('.crown').props().style.backgroundImage.includes('gold');
    const silver = second.find('.crown').props().style.backgroundImage.includes('silver');
    const bronze = third.find('.crown').props().style.backgroundImage.includes('bronze');

    expect(gold).toBe(true);
    expect(silver).toBe(true);
    expect(bronze).toBe(true);
  });

  it('should render correct avatar', () => {
    const wrapper = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);

    expect(wrapper.find('.avatar').props().children).toBe('MS');
  });

  it('should render correct name', () => {
    const wrapper = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);

    expect(wrapper.find('.leader-name').props().children).toBe('Michael Scott');
  });

  it('should render correct chart width', () => {
    const wrapper = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);

    expect(wrapper.find('.leader-bar').props().style.width).toBe('79%');
  });

  it('should render correct stats', () => {
    const wrapper = shallow(<LeaderCell index={0} leader={leaderboards[0]} />);
    const completed = wrapper.find('.leader-completed').props().children;
    const total = wrapper.find('.leader-total').props().children;
    const progress = wrapper.find('.leader-progress').props().children;

    expect(completed).toBe('22');
    expect(total).toBe('28');
    expect(progress).toBe('79%');
  });
})
