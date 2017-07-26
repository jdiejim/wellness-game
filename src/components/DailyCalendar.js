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
    const mainDate = moment().format();
    const dates = this.getDates(mainDate);

    this.setState({ mainDate, dates });
  }

  getDates(main) {
    const dates = [];
    const start = moment(main).subtract(2, 'days');

    for (let i = 0; i < 5; i++) {
      const day = moment(start).add(i, 'days');

      dates.push(day.format());
    }

    return dates;
  }

  handleChangeDay(e) {
    const { id } = e.target;
    const { mainDate: oldDate } = this.state;
    const newDate = moment(oldDate);

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

    this.setState({ dates, mainDate });
  }

  render() {
    const { dates, mainDate } = this.state;
    const datesList = dates.map(e => {
      const text = moment(e).format('MMM DD');
      if (e === mainDate) {
        return (
          <DashDay key={getKey()} main={true}>
            {text}
          </DashDay>
        )
      }
      return (
        <DashDay key={getKey()} main={false}>
          {text}
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
