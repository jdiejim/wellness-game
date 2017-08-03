import React, { Component } from 'react';
import moment from 'moment';
import { Avatar } from '../elements';
import { getTypeIcon, toggleClass } from '../utils/helpers';
import './styles/AccountabilityCell.css';

class AccountabilityCell extends Component {
  render() {
    const { selectActivity, selectedActivity, activity, activity: { id, type, description, date, buddy_avatar, buddy_initials } } = this.props;

    return (
      <article
        className={toggleClass(selectedActivity.id !== id, 'accountability-cell', 'accountability-cell-active')}
        onClick={() => selectActivity(activity)}>
        <div className="accountability-info-separator">
          <div className="accountability-type" style={getTypeIcon(type, true)}></div>
          <h2 className="accountability-description">{description}</h2>
        </div>
        <section className="accountability-buddy">
          <Avatar color={buddy_avatar || ''} size={30} fontSize={1}>
            {buddy_initials || ''}
          </Avatar>
          <p className="accountability-date">{moment(date).format('MMM DD')}</p>
        </section>
      </article>
    )
  }
}

export default AccountabilityCell;
