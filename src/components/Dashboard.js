import React, { Component } from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
import DailyCalendar from './DailyCalendar';
import CategoryChart from './CategoryChart';
import CircularProgressbar from 'react-circular-progressbar';
import { getKey } from '../utils/constants';
import './styles/Dashboard.css';
import { NextButton } from '../elements';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }

    this.getIncompleted = this.getIncompleted.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  componentDidMount() {
    const { fetchUsers, users, getToday, fetchActivities, user, fetchWeeklyPoints, fetchWeeklyMaxPoints, fetchWeeklyActivities } = this.props;
    if (!users.length) {
      fetchUsers();
    }
    const date = moment().format();

    fetchActivities({ date, user_id: user.id });
    fetchWeeklyPoints({ date, user_id: user.id });
    fetchWeeklyMaxPoints({ date, user_id: user.id });
    fetchWeeklyActivities({ date, user_id: user.id });
  }

  handleChangeDay(e) {
    const { id } = e.target;
    console.log(id);
    // // const { selectDate, selectedDate, changeMonth } = this.props;
    // const day = moment().format('DD');
    // let month;
    // let year;
    //
    // switch (id) {
    //   case 'next':
    //     month = moment(selectedDate).add(1, 'month').format('MM');
    //     year = moment(selectedDate).add(1, 'month').format('YYYY');
    //     break;
    //   default:
    //     month = moment(selectedDate).subtract(1, 'month').format('MM');
    //     year = moment(selectedDate).subtract(1, 'month').format('YYYY');
    //     break;
    // }
    // const date = `${year}-${month}-${day}T09:20:56-06:00`;
    //
    // selectDate(date);
    // changeMonth(this.getDaysList(date));
  }

  getChartData() {
    const today = +moment().format('D');
    const { userWeeklyActivities: activities } = this.props;
    // console.log(activities);
    const dataObj = activities
    .filter(d => today > +moment(d.date).format('D'))
    .map(activity => {
      const { type, status, date } = activity;
      const points = status ? 5 : 0;
      const dateAxis = moment(date).format('MMM DD');
      return { dateAxis, type, points };
    })
    .reduce((obj, e) => {
      // console.log(e);
      if (!obj[e.dateAxis]) {
        obj[e.dateAxis] = {
          rest: 0,
          sweat: 0,
          nutrition: 0,
          personal: 0
        }
      }

      obj[e.dateAxis][e.type] += e.points;
      return obj;
    }, {});

    return Object.keys(dataObj).map(key => ({
      date: key,
      rest: dataObj[key].rest,
      nutrition: dataObj[key].nutrition,
      sweat: dataObj[key].sweat,
      personal: dataObj[key].personal
    }))
  }

  getIncompleted() {
    const todayNum = +moment().format('D');
    const { userWeeklyActivities } = this.props;

    return userWeeklyActivities.reduce((t, e) => {
      const date = +moment(e.date).format('D');
      if (date < todayNum && !e.status) {
        t += 1;
      }

      return t;
    }, 0);
  }

  render() {
    const { activities, userWeeklyPoints, userMaxPoints, userWeeklyActivities } = this.props;
    const activitiesList = activities.map(activity => <ActivityCell key={getKey()} activity={activity} />)
    const progress = !userWeeklyPoints ? 0 : Math.round((userWeeklyPoints / userMaxPoints) * 100);
    const completed = !userWeeklyPoints ? 0 : userWeeklyPoints/5;
    const pending = !userWeeklyPoints ? 0 : userMaxPoints/5 - userWeeklyPoints/5;
    const incompleted = this.getIncompleted();
    const chartData = this.getChartData();

    return (
      <section className="dashboard">
        <section className="charts-wrapper">
          <section className="summary-wrapper">

            <div className="totals">
              <article className="totals-cell">
                <p className="totals-cell-title">Pending</p>
                <p className="totals-cell-value">{pending}</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Completed</p>
                <p className="totals-cell-value">{completed}</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Incompleted</p>
                <p className="totals-cell-value">{incompleted}</p>
              </article>
            </div>

            <div className="weekly-progress">
              <h2 className="weekly-title">Weekly Progress</h2>
              <CircularProgressbar percentage={progress} initialAnimation={true} />
            </div>

          </section>
          <CategoryChart data={chartData} />
        </section>
        <section className="activities-wrapper">
          <DailyCalendar />
          <section className="activities-list">
            {activitiesList}
          </section>
        </section>
      </section>
    )
  }
}

export default Dashboard;
