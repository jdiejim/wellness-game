import { connect } from 'react-redux';
import AddActivityView from '../components/AddActivityView';
import { createActivities } from '../actions';

const mapStateToProps = ({ user, selectedDate }) => ({ user, selectedDate });
const mapDispatchToProps = (dispatch) => ({
  createActivities: (activities) => dispatch(createActivities(activities))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityView);
