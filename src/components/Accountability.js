import React, { Component } from 'react';
import moment from 'moment';
import AccountListContainer from '../containers/AccountListContainer';
import './styles/Accountability.css';

class Accountability extends Component {
  componentDidMount() {
    const { user, fetchWeeklyActivities, fetchUsers } = this.props;
    const date = moment().format();

    fetchWeeklyActivities({ date, user_id: user.id });
    fetchUsers();
  }

  render() {
    return (
      <section className="accountability">
        <AccountListContainer />
      </section>
    )
  }
}

export default Accountability;
