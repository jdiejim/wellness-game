import React, { Component } from 'react';
import success from '../assets/success.svg';
import successInactive from '../assets/success-inactive.svg';
import error from '../assets/error.svg';
import { Avatar } from '../elements';
import { getTypeIcon, getBgImage, toggleClass } from '../utils/helpers';
import './styles/ActivityCell.css';

class ActivityCell extends Component {
  constructor(props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleComplete() {
    const { updateStatus, activity: { id, user_id, date, status, is_canceled } } = this.props;

    if (!is_canceled) {
      updateStatus({ id, status: !status }, { user_id, date });
    }
  }

  handleCancel() {
    const { updateCancel, activity: { id, user_id, date, is_canceled } } = this.props;

    updateCancel({ id, is_canceled: !is_canceled }, { user_id, date });
  }

  render() {
    const { type, description, status, is_canceled, buddy_initials, buddy_avatar } = this.props.activity;
    const buddyAvatar = (
      <Avatar color={buddy_avatar || ''} size={30} fontSize={1}>
        {buddy_initials || ''}
      </Avatar>
    );
    const buddyRender = !buddy_initials ? null : buddyAvatar;

    return (
      <article className={`list-item ${toggleClass(is_canceled, 'item-canceled')}`}>
        <div className="info-separator">
          <div className="activity-type" style={getTypeIcon(type, status, is_canceled)}></div>
          <section className="info-cell">
            <h2 className="description">{description}</h2>
            {buddyRender}
          </section>
        </div>
        <div className="cell-button-wrapper">
          <button
            id="cancel-btn"
            className={toggleClass(is_canceled, 'clicked', 'activity-btn')}
            onClick={this.handleCancel}
            style={getBgImage(error)}>
          </button>
          <button
            id="success-btn"
            className={toggleClass(status, 'clicked', 'activity-btn')}
            onClick={this.handleComplete}
            style={getBgImage(is_canceled ? successInactive : success)}>
          </button>
        </div>
      </article>
    )
  }
}

export default ActivityCell;
