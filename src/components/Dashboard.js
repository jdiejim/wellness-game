import React, { Component } from 'react';
import SideBar from './SideBar';
import { Banner } from '../elements';
import './styles/Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;

    fetchUsers();
  }

  render() {
    return (
      <section className='dashboard'>
        <section className='banner-dashboard'></section>
        <SideBar />
      </section>
    )
  }
}

export default Dashboard;
