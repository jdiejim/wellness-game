import React, { Component } from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
import DailyCalendarContainer from '../containers/DailyCalendarContainer';
import ActivitiesListContainer from '../containers/ActivitiesListContainer';
import CategoryChart from './CategoryChart';
import CircularProgressbar from 'react-circular-progressbar';
import { getKey } from '../utils/constants';
import './styles/Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }

    this.getOverdue = this.getOverdue.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  componentDidMount() {
    const { user, fetchWeeklyActivities } = this.props;

    const date = moment().format();

    fetchWeeklyActivities({ date, user_id: user.id });
  }

  getChartData() {
    const today = +moment().format('D');
    const { userWeeklyActivities: activities } = this.props;
    const dataObj = activities
    .filter(d => today > +moment(d.date).format('D'))
    .map(activity => {
      const { type, status, date } = activity;
      const points = status ? 5 : 0;
      const dateAxis = moment(date).format('MMM DD');
      return { dateAxis, type, points };
    })
    .reduce((obj, e) => {
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

  getOverdue() {
    const todayNum = moment().subtract(1, 'days').format();
    const { userWeeklyActivities } = this.props;

    return userWeeklyActivities.reduce((t, e) => {
      const date = moment(e.date).format();
      if (date < todayNum && !e.status) {
        t += 1;
      }

      return t;
    }, 0);
  }

  render() {
    const { userWeeklyActivities, updateStatus, updateCancel, dashDate } = this.props;
    const total = userWeeklyActivities.length;
    const completed = userWeeklyActivities.filter(e => e.status === true).length;
    const pending = total - completed;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
    const incompleted = this.getOverdue();
    const chartData = this.getChartData();
    const activitiesList = userWeeklyActivities.filter(f => moment(f.date).format('MMM DD') === moment(dashDate).format('MMM DD')).map(activity =>
      <ActivityCell
        key={getKey()}
        activity={activity}
        updateStatus={updateStatus}
        updateCancel={updateCancel}
      />
    );

    return (
      <section className="dashboard">
        <section className="stats-wrapper">
          <section className="summary-wrapper">
            <h2 className="weekly-title">Weekly Stats</h2>

            <div className="totals">
              <article className="totals-cell">
                <p className="totals-cell-title">On Progress</p>
                <p className="totals-cell-value">{pending}</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Completed</p>
                <p className="totals-cell-value">{completed}</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Overdue</p>
                <p className="totals-cell-value">{incompleted}</p>
              </article>
            </div>

            <div className="progress-pie">
              <p className="progress-pie-title">Weekly Progress</p>
              <CircularProgressbar percentage={progress} initialAnimation={true} />
            </div>

          </section>
          <CategoryChart data={chartData} />
        </section>
        <ActivitiesListContainer />
      </section>
    )
  }
}

export default Dashboard;
