import { connect } from 'react-redux';
import Accountability from '../components/Accountability';
import { fetchWeeklyActivities, fetchUsers } from '../actions';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body)),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Accountability);
