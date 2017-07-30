import { connect } from 'react-redux';
import AddActivityView from '../components/AddActivityView';
import { createActivities, fetchMonthlyActivities } from '../actions';

const mapStateToProps = ({ user, selectedDate, monthlyActivities }) => ({ user, selectedDate, monthlyActivities });
const mapDispatchToProps = (dispatch) => ({
  createActivities: (activities) => dispatch(createActivities(activities)),
  fetchMonthlyActivities: (body) => dispatch(fetchMonthlyActivities(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityView);
