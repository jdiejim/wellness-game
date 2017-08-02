import { connect } from 'react-redux';
import StatsSummary from '../components/StatsSummary';

const mapStateToProps = ({ userWeeklyActivities }) => ({ userWeeklyActivities });

export default connect(mapStateToProps)(StatsSummary);
