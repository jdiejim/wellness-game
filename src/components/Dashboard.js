import React, { Component } from 'react';
import SideBar from './SideBar';
import { Banner } from '../elements';
import './styles/Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    const { users } = this.state;

    if (!users.length) {
      fetchUsers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      this.setState({ users: nextProps.useres });
    }
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
