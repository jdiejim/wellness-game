import { connect } from 'react-redux';
import { selectBuddy, clearBuddy, selectActivity, clearActivity, updateBuddy } from '../actions';
import AccountList from '../components/AccountList';

const mapStateToProps = ({ userWeeklyActivities, user, users, buddy, activity }) => ({ userWeeklyActivities, user, users, buddy, activity });

const mapDispatchToProps = (dispatch) => ({
  selectBuddy: (buddy) => dispatch(selectBuddy(buddy)),
  clearBuddy: () => dispatch(clearBuddy()),
  selectActivity: (activity) => dispatch(selectActivity(activity)),
  clearActivity: () => dispatch(clearActivity()),
  updateBuddy: (body, weekBody, addBody) => dispatch(updateBuddy(body, weekBody, addBody)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
