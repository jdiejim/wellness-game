import React, { Component } from 'react';
import moment from 'moment';
import ActivitiesListContainer from '../containers/ActivitiesListContainer';
import StatsSummaryContainer from '../containers/StatsSummaryContainer';
import './styles/Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    const { user, fetchWeeklyActivities } = this.props;
    const date = moment().format();

    fetchWeeklyActivities({ date, user_id: user.id });
  }

  render() {
    return (
      <section className="dashboard">
        <StatsSummaryContainer />
        <ActivitiesListContainer />
      </section>
    )
  }
}

export default Dashboard;
