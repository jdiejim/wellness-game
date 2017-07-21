import { connect } from 'react-redux';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = ({ userSuccess }) => ({ userSuccess });

export default connect(mapStateToProps)(WelcomePage);
