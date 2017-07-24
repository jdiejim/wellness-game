import { connect } from 'react-redux';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(WelcomePage);
