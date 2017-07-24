import { connect } from 'react-redux';
import { logInUser, signUpUser } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = ({ userFail }) => ({ userFail });

const mapDispatchToProps = (dispatch) => ({
  logIn: (body) => dispatch(logInUser(body)),
  signUp: (body) => dispatch(signUpUser(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
