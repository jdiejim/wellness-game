import { connect } from 'react-redux';
import DailyCalendar from '../components/DailyCalendar';
import { changeDashDate } from '../actions';

const mapStateToProps = ({ dashDate, user }) => ({ dashDate, user });
const mapDispatchToProps = (dispatch) => ({
  changeDashDate: (date) => dispatch(changeDashDate(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyCalendar);
