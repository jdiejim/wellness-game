import React, { Component } from 'react';
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
    const { fetchUsers, users, getToday, selectedDate, fetchActivities, user } = this.props;
    if (!users.length) {
      fetchUsers();
    }
    getToday();
    fetchActivities({ date: selectedDate, user_id: user.id });
  }

  render() {
    return (
      <section className='dashboard'>

      </section>
    )
  }
}

export default Dashboard;
