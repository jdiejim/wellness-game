import React, { Component } from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
import { getKey } from '../utils/constants';
// import { Route } from 'react-router-dom';
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
    console.log(activities);
    const activitiesList = activities.map(activity => <ActivityCell key={getKey()} activity={activity} />)

    return (
      <section className="dashboard">

        <section className="charts-wrapper">

        </section>
        <section className="activities-wrapper">
          <section className="dashboard-calendar">

          </section>
          <section className="activities-list">
            {activitiesList}
          </section>
          <section className="challenge-week"></section>
        </section>
      </section>
    )
  }
}

export default Dashboard;
