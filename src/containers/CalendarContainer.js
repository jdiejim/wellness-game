import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { selectDate, changeMonth, selectMonth } from '../actions';

const mapStateToProps = ({ selectedDate, daysList, selectMonth }) => ({ selectedDate, daysList, selectMonth });
const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDate(date)),
  changeMonth: (daysList) => dispatch(changeMonth(daysList)),
  selectMonth: (date) => dispatch(selectMonth(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
