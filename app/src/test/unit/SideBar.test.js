import React from 'react';
import SideBar from '../../components/SideBar';
import { shallow } from 'enzyme';

describe('SideBar.js', () => {
  it('should render component when it mounts', () => {
    const wrapper = shallow(<SideBar />);

    expect(wrapper.find('.side-bar').length).toBe(1);
  });
});
