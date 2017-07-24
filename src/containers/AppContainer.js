import { connect } from 'react-redux';
import { logOut } from '../actions';
import App from '../components/App';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToPorps = (dispatch) => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToPorps)(App);
