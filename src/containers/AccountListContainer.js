import { connect } from 'react-redux';
import { updateStatus, updateCancel } from '../actions';
import AccountList from '../components/AccountList';

const mapStateToProps = ({ userWeeklyActivities, dashDate, user, users }) => ({ userWeeklyActivities, dashDate, user, users });

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (body, weekBody) => dispatch(updateStatus(body, weekBody)),
  updateCancel: (body, weekBody) => dispatch(updateCancel(body, weekBody))
})

export default connect(mapStateToProps, null)(AccountList);
