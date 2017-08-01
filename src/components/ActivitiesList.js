import React from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
import DailyCalendarContainer from '../containers/DailyCalendarContainer';
import { getKey } from '../utils/constants';
import './styles/ActivitiesList.css';

const ActivitiesList = ({ userWeeklyActivities, dashDate, updateStatus, updateCancel }) => {
  const activities = userWeeklyActivities
    .filter(d => moment(d.date).format('MMM DD') === moment(dashDate).format('MMM DD'))
    .map(activity =>
      <ActivityCell
        key={getKey()}
        activity={activity}
        updateStatus={updateStatus}
        updateCancel={updateCancel}
      />
    );

  return (
    <section className="activities-wrapper">
      <DailyCalendarContainer />
      <section className="activities-list">
        {activities}
      </section>
    </section>
  )
}

export default ActivitiesList

// const activities = compose(filteredArray, mapActivities, props, getKey)();
// const filteredArray = (array, dashDate) => array.filter(e => moment(e.date).format('MMM DD') === moment(dashDate).format('MMM DD'));
// const mapActivities = (array, updateStatus, updateCancel, getKey) => array.map(activity =>
//   <ActivityCell
//     key={getKey()}
//     activity={activity}
//     updateStatus={updateStatus}
//     updateCancel={updateCancel}
//   />
// )
//
// const compose = (action, action2, { userWeeklyActivities, dashDate, updateStatus, updateCancel }, getKey) => (callback, updateStatus, updateCancel) => action2(action(userWeeklyActivities, dashDate), updateStatus, updateCancel, getKey);
