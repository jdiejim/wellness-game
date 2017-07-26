import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { fetchUsers, getToday, fetchActivities, fetchWeeklyPoints, fetchWeeklyMaxPoints, fetchWeeklyActivities } from '../actions';

const mapStateToProps = ({ users, selectedDate, activities, user, userWeeklyPoints, userMaxPoints, userWeeklyActivities }) => ({ users, selectedDate, activities, user, userWeeklyPoints, userMaxPoints, userWeeklyActivities });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  getToday: () => dispatch(getToday()),
  fetchWeeklyPoints: (body) => dispatch(fetchWeeklyPoints(body)),
  fetchWeeklyMaxPoints: (body) => dispatch(fetchWeeklyMaxPoints(body)),
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body)),
  fetchActivities: (body) => dispatch(fetchActivities(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
