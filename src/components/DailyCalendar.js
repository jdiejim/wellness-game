import React, { Component } from 'react';
import moment from 'moment';
import next from '../assets/next.svg';
import back from '../assets/back.svg';
import { NextButton, DashDay } from '../elements';
import { getKey } from '../utils/constants';
import './styles/DailyCalendar.css';

class DailyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      dates: [],
      mainDate: ''
    }

    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.getDates = this.getDates.bind(this);
  }

  componentDidMount() {
    const { changeDashDate, dashDate } = this.props;
    const mainDate = moment(dashDate).format();
    const dates = this.getDates(mainDate);

    changeDashDate(mainDate)
    this.setState({ mainDate, dates });
  }

  getDates(main) {
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

  handleChangeDay(e) {
    const today = moment().format();
    const offset = moment(today).isoWeekday();
    const min = moment(today).subtract(offset, 'days').format();
    const max = moment(today).add(7 - offset, 'days').format();
    const { id } = e.target;
    const { dashDate, changeDashDate, user: { id: user_id } } = this.props;
    const newDate = moment(dashDate);

    switch (id) {
      case 'dash-next':
        newDate.add(1, 'days');
        break;
      default:
        newDate.subtract(1, 'days');
        break;
    }

    const mainDate = newDate.format();
    const dates = this.getDates(mainDate);

    if (mainDate >= min && mainDate <= max) {
      changeDashDate(mainDate);

      this.setState({ dates, mainDate });
    }
  }

  render() {
    const { dates, mainDate } = this.state;
    const datesList = dates.map(e => {
      const date = moment(e).format('MMM DD');
      const text = moment(e).format('dddd');

      if (e === null) {
        return (
          <DashDay className="dash-day" key={getKey()} main={false}></DashDay>
        )
      }

      if (e === mainDate) {
        return (
          <DashDay id="main-dash-day" className="dash-day" key={getKey()} main={true}>
            <p>{text}</p>
            <h3>{date}</h3>
          </DashDay>
        )
      }
      return (
        <DashDay className="dash-day" key={getKey()} main={false}>
          <h3>{date}</h3>
          <p>{text}</p>
        </DashDay>
      )
    })

    return (
      <section className="dashboard-calendar">
        <NextButton onClick={this.handleChangeDay} id="dash-previous" icon={back} scale={1.5} />
        <section className="dash-days-list">
          {datesList}
        </section>
        <NextButton onClick={this.handleChangeDay} id="dash-next" icon={next} scale={1.5} />
      </section>
    )
  }
}

export default DailyCalendar;
