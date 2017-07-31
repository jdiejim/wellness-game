import React from 'react';
import DailyCalendar from '../../components/DailyCalendar';
import { shallow, mount } from 'enzyme';
import { user } from '../stubs';
import moment from 'moment';

describe('DailyCalendar', () => {
  const dashDate = '2017-07-24T10:39:35-06:00';
  const changeDashDate = (date) => '';
  const fetchWeeklyActivities = (body) => '';

  it('should render component when it mounts', () => {
    const wrapper = shallow(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    expect(wrapper.find('.dashboard-calendar').length).toBe(1);
  });

  it('should render previous and next buttons', () => {
    const wrapper = shallow(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    expect(wrapper.find('#dash-previous').length).toBe(1);
    expect(wrapper.find('#dash-next').length).toBe(1);
  });

  it('should render previous and next buttons', () => {
    const wrapper = shallow(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    expect(wrapper.find('#dash-previous').length).toBe(1);
    expect(wrapper.find('#dash-next').length).toBe(1);
  });

  it('should have initial state', () => {
    const wrapper = shallow(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    const expected = {
      dates: [],
      mainDate: ''
    }

    expect(wrapper.state()).toEqual(expected);
  });

  it('should modify state when it mounts', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    const mainExpected = '2017-07-24T10:39:35-06:00';
    const datesExpected = [
      null,
      null,
      '2017-07-24T10:39:35-06:00',
      '2017-07-25T10:39:35-06:00',
      '2017-07-26T10:39:35-06:00'
    ]

    expect(wrapper.state('dates')).toEqual(datesExpected);
    expect(wrapper.state('mainDate')).toBe(mainExpected);
  });

  it('should trigger changeDashDate function when it mounts', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={mockFn}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should change state function when next button is clicked', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );
    const next = wrapper.find('#dash-next');
    const preExpected = {
      dates: [
        null,
        null,
        '2017-07-24T10:39:35-06:00',
        '2017-07-25T10:39:35-06:00',
        '2017-07-26T10:39:35-06:00'
      ],
      mainDate: '2017-07-24T10:39:35-06:00'
    }

    const expected = {
      dates: [
        null,
        '2017-07-24T10:39:35-06:00',
        '2017-07-25T10:39:35-06:00',
        '2017-07-26T10:39:35-06:00',
        '2017-07-27T10:39:35-06:00'
      ],
      mainDate: '2017-07-25T10:39:35-06:00'
    }

    expect(wrapper.state()).toEqual(preExpected);

    next.simulate('click', { target: { id: 'dash-next' } });

    expect(wrapper.state()).toEqual(expected);
  });

  it('should change state function when previous button is clicked', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate="2017-07-25T10:39:35-06:00"
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );
    const previous = wrapper.find('#dash-previous');
    const preExpected = {
      dates: [
        null,
        '2017-07-24T10:39:35-06:00',
        '2017-07-25T10:39:35-06:00',
        '2017-07-26T10:39:35-06:00',
        '2017-07-27T10:39:35-06:00',
      ],
      mainDate: '2017-07-25T10:39:35-06:00'
    }

    const expected = {
      dates: [
        null,
        null,
        '2017-07-24T10:39:35-06:00',
        '2017-07-25T10:39:35-06:00',
        '2017-07-26T10:39:35-06:00'
      ],
      mainDate: '2017-07-24T10:39:35-06:00'
    }

    expect(wrapper.state()).toEqual(preExpected);

    previous.simulate('click', { target: { id: '' } });

    expect(wrapper.state()).toEqual(expected);
  });

  it('should not change state if date is on the limit', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );
    const previous = wrapper.find('#dash-previous');
    const expected = {
      dates: [
        null,
        null,
        '2017-07-24T10:39:35-06:00',
        '2017-07-25T10:39:35-06:00',
        '2017-07-26T10:39:35-06:00'
      ],
      mainDate: '2017-07-24T10:39:35-06:00'
    }

    expect(wrapper.state()).toEqual(expected);

    previous.simulate('click', { target: { id: '' } });

    expect(wrapper.state()).toEqual(expected);
  });

  it('should render correct amount of dates', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate='2017-07-27T10:39:35-06:00'
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );

    expect(wrapper.find('.dash-day').length).toBe(5)
  });

  it('should render correct main date', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );
    const main = wrapper.find('#main-dash-day h3').props().children

    expect(main).toBe('Jul 24')
  });
});
