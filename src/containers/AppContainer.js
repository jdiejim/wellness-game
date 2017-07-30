import { connect } from 'react-redux';
import { logOut, selectDate } from '../actions';
import App from '../components/App';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToPorps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
  selectDate: (date) => dispatch(selectDate(date)),
})

export default connect(mapStateToProps, mapDispatchToPorps)(App);
