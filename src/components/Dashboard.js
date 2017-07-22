import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddActivityView from './AddActivityView';
import './styles/Dashboard.css';

class Dashboard extends Component {

  componentDidMount() {
    const { fetchUsers, users } = this.props;

    if (!users.length) {
      fetchUsers();
    }
  }

  render() {
    return (
      <section className='dashboard'>
        {/* <section className='banner-dashboard'></section> */}
        dashboard
        {/* <AddActivityView /> */}
      </section>
    )
  }
}

export default Dashboard;
