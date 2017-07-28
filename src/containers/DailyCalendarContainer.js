import { connect } from 'react-redux';
import DailyCalendar from '../components/DailyCalendar';
import { changeDashDate, fetchWeeklyActivities } from '../actions';

const mapStateToProps = ({ dashDate, user }) => ({ dashDate, user });
const mapDispatchToProps = (dispatch) => ({
  changeDashDate: (date) => dispatch(changeDashDate(date)),
  fetchWeeklyActivities: (body) => dispatch(fetchWeeklyActivities(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyCalendar);
