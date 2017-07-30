import React, { Component } from 'react';
import moment from 'moment';
import next from '../assets/next.svg';
import back from '../assets/back.svg';
import cancel from '../assets/cancel.svg';
import { getKey } from '../utils/constants';
import { NextButton, Day } from '../elements';
import './styles/Calendar.css';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      daysList: [],
    }

    this.getDaysList = this.getDaysList.bind(this);
    this.getDays = this.getDays.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  componentDidMount() {
    const { changeMonth, selectedDate: date, fetchMonthlyActivities, user: { id: user_id } } = this.props;

    changeMonth(this.getDaysList(date));
    fetchMonthlyActivities({ date, user_id });
  }

  getDaysList(selectedDate) {
    const daysList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const month = moment(selectedDate).format('MM');
    const year = moment(selectedDate).format('YYYY');
    const first = moment(`${year}-${month}-01`).weekday();
    const start = moment(`${year}-${month}-01`).subtract(first, 'days').format();

    for (let i = 0; i < 42; i++) {
      const day = moment(start).add(i, 'days').format();

      daysList.push(day);
    }
    return daysList;
  }

  getDays() {
    const { selectedDate, daysList, monthlyActivities } = this.props;
    const cancelLimit = moment().subtract(1, 'days').format();
    const currentDay = moment(selectedDate).format('D');
    const currentMonth = moment(selectedDate).format('MM');

    return daysList.map((date, i) => {
      if (i < 7) {
        return (
          <Day
            key={getKey()}
            value={date}
          />
        )
      }
      const monthly = monthlyActivities.map(e => moment(e.date).format());
      const day = moment(date).format('D');
      const month = moment(date).format('MM');
      const momentDate = moment(date).format();

      if (month !== currentMonth) {
        return (
          <Day
            key={getKey()}
            value={day}
            old={true}
          />
        )
      }
      if (day === currentDay && month === currentMonth) {
        return (
          <Day
            onClick={this.handleSelectDay}
            key={getKey()}
            value={day}
            active={'active'}
          />
        )
      }
      if (momentDate < cancelLimit) {
        return (
          <Day
            key={getKey()}
            value={day}
            cancel={cancel}
          />
        )
      }
      if (monthly.find(f => momentDate === f)) {
        return (
          <Day
            key={getKey()}
            value={day}
            active={'exists'}
            onClick={this.handleSelectDay}
          />
        )
      }
      return (
        <Day
          onClick={this.handleSelectDay}
          key={getKey()}
          value={day}
        />
      )
    });
  }

  handleSelectDay(e) {
    const { selectDate, selectedDate } = this.props;
    const momentDate = moment(selectedDate);
    const month = momentDate.format('MM');
    const year = momentDate.format('YYYY');
    const { value } = e.target;
    const date = value.length > 1 ? `${year}-${month}-${value}` : `${year}-${month}-0${value}`;

    selectDate(date);
  }

  handleMonthChange(e) {
    const { id } = e.target;
    const { selectDate, selectedDate, changeMonth, fetchMonthlyActivities, user: { id: user_id } } = this.props;
    let month;
    let year;

    switch (id) {
      case 'next':
        month = moment(selectedDate).add(1, 'month').format('MM');
        year = moment(selectedDate).add(1, 'month').format('YYYY');
        break;
      default:
        month = moment(selectedDate).subtract(1, 'month').format('MM');
        year = moment(selectedDate).subtract(1, 'month').format('YYYY');
        break;
    }
    const date = `${year}-${month}-28`;

    selectDate(date);
    changeMonth(this.getDaysList(date));
    fetchMonthlyActivities({ date, user_id });
  }

  render() {
    const { selectedDate } = this.props;
    const days = this.getDays();
    const title = moment(selectedDate).format('MMMM YYYY');

    return (
      <section className="calendar">
        <header className="calendar-header">
          <NextButton id="previous" onClick={this.handleMonthChange} icon={back} />
          <h1 className="calendar-month">{title}</h1>
          <NextButton id="next" onClick={this.handleMonthChange} icon={next} />
        </header>
        <section className="calendar-body">
          {days}
        </section>
      </section>
    )
  }
}

export default Calendar;
