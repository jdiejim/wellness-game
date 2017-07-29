import { connect } from 'react-redux';
import Leaderboards from '../components/Leaderboards';
import { fetchLeaderboards } from '../actions';

const mapStateToProps = ({ leaderboards }) => ({ leaderboards });
const mapDispatchToProps = dispatch => ({
  fetchLeaderboards: (date) => dispatch(fetchLeaderboards(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
