import React from 'react';
import DailyCalendar from '../../components/DailyCalendar';
import { shallow, mount } from 'enzyme';
import { user } from '../stubs';
import moment from 'moment';

describe('DailyCalendar', () => {
  const dashDate = moment().format();
  const changeDashDate = (date) => '';
  const fetchWeeklyActivities = (body) => '';
  const getDates = (main) => {
    const dates = [];
    const today = moment().format();
    const offset = moment(today).isoWeekday();
    const min = moment(today).subtract(offset, 'days').format();
    const max = moment(today).add(7 - offset, 'days').format();

    const start = moment(main).subtract(2, 'days');

    for (let i = 0; i < 5; i++) {
      const day = moment(start).add(i, 'days');

      if ( day.format() >= min && day.format() <= max) {
        dates.push(day.format());
      } else {
        dates.push(null);
      }
    }

    return dates;
  }

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

    const mainExpected = moment().format('D');
    const datesExpected = getDates(dashDate);
    const mainResult = moment(wrapper.state('mainDate')).format('D')

    expect(wrapper.state('dates')).toEqual(datesExpected);
    expect(mainResult).toBe(mainExpected);
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
    const preExpected = getDates(dashDate);
    const nextDate = moment(dashDate).add(1, 'days');
    const expected = getDates(nextDate);

    expect(wrapper.state('dates')).toEqual(preExpected);

    next.simulate('click', { target: { id: 'dash-next' } });

    expect(wrapper.state('dates')).toEqual(expected);
  });

  it('should change state function when previous button is clicked', () => {
    const wrapper = mount(
      <DailyCalendar
        user={user}
        dashDate={dashDate}
        changeDashDate={changeDashDate}
        fetchWeeklyActivities={fetchWeeklyActivities}
      />
    );
    const previous = wrapper.find('#dash-previous');
    const preExpected = getDates(dashDate);
    const previousDate = moment(dashDate).subtract(1, 'days');
    const expected = getDates(previousDate);

    expect(wrapper.state('dates')).toEqual(preExpected);

    previous.simulate('click', { target: { id: '' } });

    expect(wrapper.state('dates')).toEqual(expected);
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
    const main = wrapper.find('#main-dash-day h3').props().children;
    const expected = moment().format('MMM DD');

    expect(main).toBe(expected)
  });
});
