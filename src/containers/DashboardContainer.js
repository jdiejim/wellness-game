import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { fetchUsers } from '../actions';

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
