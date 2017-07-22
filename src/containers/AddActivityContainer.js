import { connect } from 'react-redux';
import AddActivityView from '../components/AddActivityView';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(AddActivityView);
