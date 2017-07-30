import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { selectDate, changeMonth, selectMonth, fetchMonthlyActivities } from '../actions';

const mapStateToProps = ({ user, selectedDate, daysList, selectMonth, monthlyActivities }) => ({ user, selectedDate, daysList, selectMonth, monthlyActivities });
const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDate(date)),
  changeMonth: (daysList) => dispatch(changeMonth(daysList)),
  selectMonth: (date) => dispatch(selectMonth(date)),
  fetchMonthlyActivities: (date) => dispatch(fetchMonthlyActivities(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
