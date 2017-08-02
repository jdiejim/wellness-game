import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { fetchWeeklyActivities } from '../actions';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
