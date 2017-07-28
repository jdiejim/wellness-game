import React, { Component } from 'react';
import rest from '../assets/rest.svg';
import nutrition from '../assets/nutrition.svg';
import personal from '../assets/personal.svg';
import sweat from '../assets/sweat.svg';
import success from '../assets/success.svg';
import successInactive from '../assets/success-inactive.svg';
import error from '../assets/error.svg';
import './styles/ActivityCell.css';

class ActivityCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      isCompleted: false,
      isCanceled: false
    }

    this.handleComplete = this.handleComplete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    const { id, status: isCompleted, is_canceled: isCanceled } = this.props.activity;

    this.setState({ id, isCompleted, isCanceled });
  }

  handleComplete() {
    const { isCanceled, isCompleted } = this.state;
    const { fetchWeeklyActivities, updateStatus, activity: { id, user_id, date } } = this.props;

    if (!isCanceled) {
      updateStatus({ id, status: !isCompleted }, { user_id, date });
      this.setState({ isCompleted: !isCompleted });
    }
  }

  handleCancel() {
    const { isCanceled, isCompleted } = this.state;
    const { updateCancel, activity: { id } } = this.props;

    if (!isCanceled) {
      this.setState({ isCanceled: !isCanceled, isCompleted: false });
    } else {
      this.setState({ isCanceled: !isCanceled });
    }

    updateCancel({ id, is_canceled: !isCanceled });
  }

  render() {
    const { isCompleted, isCanceled } = this.state;
    const { type, description, status, date, id } = this.props.activity;
    const icons = {
      rest: { icon: rest, color: '#3F51B5'},
      nutrition: { icon: nutrition, color: '#54b3a7'},
      sweat: { icon: sweat, color: '#2b2b2b'},
      personal: { icon: personal, color: '#f27474'}
    };
    const icon = {
      backgroundImage: `url(${icons[type].icon})`,
      backgroundColor: isCompleted ? icons[type].color : '#a29f9f'
    };
    const caceledIcon = {
      backgroundImage: `url(${icons[type].icon})`,
      backgroundColor: '#DBDBDB'
    };
    const typeIcon = isCanceled ? caceledIcon : icon;
    const listClass = isCanceled ? 'list-item item-canceled' : 'list-item'
    const successClass = isCompleted ? 'clicked' : 'activity-btn';
    const successIcon = isCanceled ? successInactive : success;
    const successBtnStyle = {
      backgroundImage: `url(${successIcon})`,
    };
    const cancelBtn = isCanceled ? 'clicked' : 'activity-btn';
    const cancelBtnStyle = {
      backgroundImage: `url(${error})`,
    };


    return (
      <section className={listClass}>
        <div className="info-separator">
          <div className="activity-type" style={typeIcon}></div>
          <h2 className="description">{description}</h2>
        </div>
        <div className="cell-button-wrapper">
          <button
            className={cancelBtn}
            onClick={this.handleCancel}
            style={cancelBtnStyle}>
          </button>
          <button
            className={successClass}
            onClick={this.handleComplete}
            style={successBtnStyle}>
          </button>
        </div>
      </section>
    )
  }
}

export default ActivityCell;
