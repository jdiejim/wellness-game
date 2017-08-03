import React, { Component } from 'react';
import moment from 'moment';
import AccountabilityCell from './AccountabilityCell';
import UserCell from '../components/UserCell';
import { getKey } from '../utils/constants';
import { toggleClass } from '../utils/helpers';
import './styles/AccountList.css';

class AccountList extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { clearBuddy, clearActivity } = this.props;

    clearBuddy();
    clearActivity();
  }

  handleClick() {
    const { updateBuddy, activity, buddy: { id: buddy_id, first_name, last_name, avatar: buddy_avatar }, user: { id: user_id } } = this.props;
    const buddy_initials = `${first_name[0]}${last_name[0]}`;
    const date = moment().format();
    console.log(buddy_id);
    const newActivity = {
      user_id: buddy_id,
      description: activity.description,
      type: 'buddy',
      date
    };

    updateBuddy({ id: activity.id, buddy_id, buddy_initials, buddy_avatar }, { user_id, date }, newActivity);
  }

  render() {
    const { userWeeklyActivities, users, selectBuddy, buddy, activity: selectedActivity, selectActivity, user: { id } } = this.props;
    const activities = userWeeklyActivities.filter(e => !e.is_canceled && e.type !== 'buddy')
      .map(activity =>
        <AccountabilityCell
          key={getKey()}
          activity={activity}
          selectedActivity={selectedActivity}
          selectActivity={selectActivity}
        />
      );

    const mappedUsers = users.filter(e => e.id !== id).map(user =>
      <UserCell
        buddy={buddy}
        selectBuddy={selectBuddy}
        key={getKey()}
        user={user}
      />)

    return (
      <section className="account-dash-wrapper">
        <section className={toggleClass(!buddy.id, 'accountability-tables', 'accountability-tables-active')}>
          <section className="user-wrapper">
            <section className={toggleClass(!buddy.id, 'stepper-wrapper', 'stepper-active')}>
              <div className="stepper">
                <h3 className="stepper-number">1</h3>
              </div>
              <h2 className="stepper-title">Choose a Buddy</h2>
            </section>
            <section className="users-list">
              {mappedUsers}
            </section>
          </section>
          <section className="activity-wrapper">
            <section className={toggleClass(!selectedActivity.id, 'stepper-wrapper', 'stepper-active')}>
              <div className="stepper">
                <h3 className="stepper-number">2</h3>
              </div>
              <h2 className="stepper-title">Select an Activity</h2>
              <button onClick={this.handleClick} className="stepper-confirm">Confirm</button>
            </section>
            <section className="account-list">
              {activities}
            </section>
          </section>
        </section>
      </section>
    )
  }
}

export default AccountList
