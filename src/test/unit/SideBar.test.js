import React from 'react';
import SideBar from '../../components/SideBar';
import { shallow } from 'enzyme';
import { user } from '../stubs';

describe('SideBar.js', () => {
  it('should render component when it mounts', () => {
    const wrapper = shallow(<SideBar user={user} />);

    expect(wrapper.find('.side-bar').length).toBe(1);
  });

  it('should render correct avatar', () => {
    const wrapper = shallow(<SideBar user={user} />);

    expect(wrapper.find('#avatar').props().children).toBe('MS');
  });

  it('should render correct number of links', () => {
    const wrapper = shallow(<SideBar user={user} />);

    expect(wrapper.find('.side-nav-tab').length).toBe(5);
  });

  it('should render correct nav icons', () => {
    const wrapper = shallow(<SideBar user={user} />);
    const dashboard = wrapper.find('.side-nav-tab').get(0).props.icon;
    const add = wrapper.find('.side-nav-tab').get(1).props.icon;
    const leaderboards = wrapper.find('.side-nav-tab').get(2).props.icon;
    const buddy = wrapper.find('.side-nav-tab').get(3).props.icon;
    const rewards = wrapper.find('.side-nav-tab').get(4).props.icon;

    expect(dashboard).toBe('dashboard.svg');
    expect(add).toBe('add.svg');
    expect(leaderboards).toBe('trophy.svg');
    expect(buddy).toBe('loyalty.svg');
    expect(rewards).toBe('badge.svg');
  });
});
