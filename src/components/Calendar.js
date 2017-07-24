import React, { Component } from 'react';
import moment from 'moment';
import next from '../assets/next.svg';
import back from '../assets/back.svg';
// import cancel from '../assets/cancel.svg';
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
    const { changeMonth, selectedDate } = this.props;

    changeMonth(this.getDaysList(selectedDate));
  }

  getDaysList(selectedDate) {
    const daysList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(e => ({ day: e, month: '' }));
    const date = moment(selectedDate);
    const month = date.format('MM');
    const year = date.format('YYYY');
    const firstDayOfWeek = moment(`${year}-${month}-01T09:20:56-06:00`).weekday();
    const start = moment(`${year}-${month}-01T09:20:56-06:00`).subtract(firstDayOfWeek, 'days').format();

    for (let i = 0; i < 42; i++) {
      const day = moment(start).add(i, 'days').format('D');
      const month = moment(start).add(i, 'days').format('MM');

      daysList.push({ day, month });
    }
    console.log('triggerd');
    return daysList;
  }

  getDays() {
    const { selectedDate, daysList } = this.props;
    const momentDate = moment(selectedDate);
    const currentDay = momentDate.format('D');
    const month = momentDate.format('MM');

    return daysList.map((date, i) => {
      if (i < 7) {
        return (
          <Day
            key={getKey()}
            value={date.day}
          />
        )
      }
      if (date.month !== month) {
        return (
          <Day
            key={getKey()}
            value={date.day}
            old={true}
          />
        )
      }
      // if (+date.day < +currentDay) {
      //   return (
      //     <Day
      //       key={getKey()}
      //       value={date.day}
      //       cancel={cancel}
      //     />
      //   )
      // }
      if (date.day === currentDay && date.month === month) {
        return (
          <Day
            onClick={this.handleSelectDay}
            key={getKey()}
            value={date.day}
            active={true}
          />
        )
      }
      return (
        <Day
          onClick={this.handleSelectDay}
          key={getKey()}
          value={date.day}
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
    const date = value.length > 1 ? `${year}-${month}-${value}T09:20:56-06:00` : `${year}-${month}-0${value}T09:20:56-06:00`;;

    selectDate(date);
  }

  handleMonthChange(e) {
    const { id } = e.target;
    const { selectDate, selectedDate, changeMonth } = this.props;
    const day = moment(selectedDate).format('DD');
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
    const date = `${year}-${month}-${day}T09:20:56-06:00`;

    selectDate(date);
    changeMonth(this.getDaysList(date));
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
