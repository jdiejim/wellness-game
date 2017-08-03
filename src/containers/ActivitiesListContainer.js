import { connect } from 'react-redux';
import { updateStatus, updateCancel } from '../actions';
import ActivitiesList from '../components/ActivitiesList';

const mapStateToProps = ({ userWeeklyActivities, dashDate, user, users }) => ({ userWeeklyActivities, dashDate, user, users });

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (body, weekBody) => dispatch(updateStatus(body, weekBody)),
  updateCancel: (body, weekBody) => dispatch(updateCancel(body, weekBody))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);
