import { connect } from 'react-redux';
import { selectBuddy, clearBuddy, selectActivity, clearActivity } from '../actions';
import AccountList from '../components/AccountList';

const mapStateToProps = ({ userWeeklyActivities, dashDate, user, users, buddy, activity }) => ({ userWeeklyActivities, dashDate, user, users, buddy, activity });

const mapDispatchToProps = (dispatch) => ({
  selectBuddy: (buddy) => dispatch(selectBuddy(buddy)),
  clearBuddy: () => dispatch(clearBuddy()),
  selectActivity: (activity) => dispatch(selectActivity(activity)),
  clearActivity: () => dispatch(clearActivity()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
