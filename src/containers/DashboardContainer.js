import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import {
  fetchUsers,
  fetchWeeklyActivities,
  updateStatus,
  updateCancel
} from '../actions';

const mapStateToProps = ({
  users,
  selectedDate,
  user,
  userWeeklyActivities,
  dashDate
}) => ({
  users,
  selectedDate,
  user,
  userWeeklyActivities,
  dashDate
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body)),
  updateStatus: (body, weekBody) => dispatch(updateStatus(body, weekBody)),
  updateCancel: (body, weekBody) => dispatch(updateCancel(body, weekBody)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
