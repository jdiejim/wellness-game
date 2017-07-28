import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import {
  fetchUsers,
  getToday,
  fetchActivities,
  fetchWeeklyPoints,
  fetchWeeklyMaxPoints,
  fetchWeeklyActivities,
  updateStatus,
  updateCancel
} from '../actions';

const mapStateToProps = ({
  users,
  selectedDate,
  activities,
  user,
  userWeeklyPoints,
  userMaxPoints,
  userWeeklyActivities,
  dashDate
}) => ({
  users,
  selectedDate,
  activities,
  user,
  userWeeklyPoints,
  userMaxPoints,
  userWeeklyActivities,
  dashDate
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  getToday: () => dispatch(getToday()),
  fetchWeeklyPoints: (body) => dispatch(fetchWeeklyPoints(body)),
  fetchWeeklyMaxPoints: (body) => dispatch(fetchWeeklyMaxPoints(body)),
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body)),
  fetchActivities: (body) => dispatch(fetchActivities(body)),
  updateStatus: (body, weekBody) => dispatch(updateStatus(body, weekBody)),
  updateCancel: (body) => dispatch(updateCancel(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
