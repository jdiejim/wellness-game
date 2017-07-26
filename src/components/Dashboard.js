import React, { Component } from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
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
  }

  componentDidMount() {
    const { fetchUsers, users, getToday, fetchActivities, user } = this.props;
    if (!users.length) {
      fetchUsers();
    }
    // getToday();
    const date = moment().format();
    fetchActivities({ date, user_id: user.id });
  }

  render() {
    const { activities } = this.props;
    const activitiesList = activities.map(activity => <ActivityCell key={getKey()} activity={activity} />)

    return (
      <section className="dashboard">
        <section className="charts-wrapper">
          <section className="summary-wrapper">

            <div className="totals">
              <article className="totals-cell">
                <p className="totals-cell-title">Pending</p>
                <p className="totals-cell-value">20</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Completed</p>
                <p className="totals-cell-value">20</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Incompleted</p>
                <p className="totals-cell-value">20</p>
              </article>
            </div>

            <div className="weekly-progress">
              <h2 className="weekly-title">Weekly Progress</h2>
              <CircularProgressbar percentage={60} initialAnimation={true} />
            </div>

          </section>
          <CategoryChart />
        </section>
        <section className="activities-wrapper">
          <section className="dashboard-calendar">

          </section>
          <section className="activities-list">
            {activitiesList}
          </section>
        </section>
      </section>
    )
  }
}

export default Dashboard;
