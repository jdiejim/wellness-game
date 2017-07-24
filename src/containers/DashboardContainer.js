import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { fetchUsers, getToday, fetchActivities } from '../actions';

const mapStateToProps = ({ users, selectedDate, activities, user }) => ({ users, selectedDate, activities, user });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  getToday: () => dispatch(getToday()),
  fetchActivities: (body) => dispatch(fetchActivities(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
