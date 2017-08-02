import React from 'react';
import moment from 'moment';
import AccountabilityCell from './AccountabilityCell';
import DailyCalendarContainer from '../containers/DailyCalendarContainer';
import UserCell from '../components/UserCell';
import { getKey } from '../utils/constants';
import './styles/AccountList.css';

const AccountList = ({ userWeeklyActivities, dashDate, users }) => {
  const activities = userWeeklyActivities
    .filter(d => moment(d.date).format('MMM DD') === moment(dashDate).format('MMM DD'))
    .map(activity =>
      <AccountabilityCell
        key={getKey()}
        activity={activity}
      />
    );

    const mappedUsers = users.map(user => <UserCell key={getKey()} user={user} />)

  return (
    <section className="account-dash-wrapper">
      <section className="users-list">
        {mappedUsers}
      </section>
      <section className="account-wrapper">
        <DailyCalendarContainer />
        <section className="account-list">
          {activities}
        </section>
      </section>
    </section>
  )
}

export default AccountList
