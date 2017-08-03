import React, { Component } from 'react';
import moment from 'moment';
import { getTypeIcon, toggleClass } from '../utils/helpers';
import './styles/AccountabilityCell.css';

class AccountabilityCell extends Component {
  render() {
    const { selectActivity, selectedActivity, activity, activity: { id, type, description, status, is_canceled, date } } = this.props;

    return (
      <article
        className={toggleClass(selectedActivity.id !== id, 'accountability-cell', 'accountability-cell-active')}
        onClick={() => selectActivity(activity)}>
        <div className="accountability-info-separator">
          <div className="accountability-type" style={getTypeIcon(type, true)}></div>
          <h2 className="accountability-description">{description}</h2>
        </div>
        <p className="accountability-date">{moment(date).format('MMM DD')}</p>
        <div className="cell-button-wrapper">

        </div>
      </article>
    )
  }
}

export default AccountabilityCell;
