import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { selectDate, changeMonth } from '../actions';

const mapStateToProps = ({ selectedDate, daysList }) => ({ selectedDate, daysList });
const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDate(date)),
  changeMonth: (daysList) => dispatch(changeMonth(daysList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
