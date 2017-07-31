import React from 'react';
import AddActivityView from '../../components/AddActivityView';
import { shallow } from 'enzyme';


describe('AddActivityView', () => {
  it('should render correct component when it mounts', () => {
    const wrapper = shallow(
      <AddActivityView
        monthlyActivities={[]}
       />
    );

    expect(wrapper.find('.add-activity-view').length).toBe(1);
  });

  it('should have initial state', () => {
    const wrapper = shallow(
      <AddActivityView
        monthlyActivities={[]}
       />
    );

    const expected = {
      rest: '',
      nutrition: '',
      sweat: '',
      personal: '',
    }

    expect(wrapper.state()).toEqual(expected);
  });

  it('should render all categories inputs', () => {
    const wrapper = shallow(
      <AddActivityView
        monthlyActivities={[]}
       />
    );

    const rest = wrapper.find('#rest');
    const sweat = wrapper.find('#sweat');
    const nutrition = wrapper.find('#nutrition');
    const personal = wrapper.find('#personal');

    expect(rest.length).toBe(1);
    expect(sweat.length).toBe(1);
    expect(nutrition.length).toBe(1);
    expect(personal.length).toBe(1);
  })

  it('should modify change when handleOnChange is triggered', () => {
    const wrapper = shallow(
      <AddActivityView
        monthlyActivities={[]}
       />
    );
    const expected = {
      rest: 'rest',
      nutrition: 'nutrition',
      sweat: 'sweat',
      personal: 'personal'
    }

    const rest = wrapper.find('#rest');
    const sweat = wrapper.find('#sweat');
    const nutrition = wrapper.find('#nutrition');
    const personal = wrapper.find('#personal');

    rest.simulate('change', { target: { value: 'rest', id: 'rest' } });
    sweat.simulate('change', { target: { value: 'sweat', id: 'sweat' } });
    nutrition.simulate('change', { target: { value: 'nutrition', id: 'nutrition' } });
    personal.simulate('change', { target: { value: 'personal', id: 'personal' } });

    expect(wrapper.state()).toEqual(expected);
  });
});
