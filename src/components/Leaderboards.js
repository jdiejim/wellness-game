import React, { Component } from 'react';
import moment from 'moment';
import LeaderCell from './LeaderCell';
import { getKey } from '../utils/constants';
import './styles/Leaderboards.css';

class Leaderboards extends Component {
  componentDidMount() {
    const { fetchLeaderboards } = this.props;
    const date = moment().format();

    fetchLeaderboards({ date });
  }

  render() {
    const { leaderboards } = this.props;

    if (!leaderboards.length) {
      return <div>loading</div>
    }

    const leaders = leaderboards.map((leader, i) =>
      <LeaderCell
        index={i}
        key={getKey()}
        leader={leader}
      />)

    return (
      <section className="leaderboards">
        <div className="empty-box"></div>
        <header className="leaderboards-header">
          <h2 className="leaderboards-title">Leaderboards</h2>
          <div className="leaderboards-column-wrapper">
            <p className="leaderboards-column-name">Completed</p>
            <p className="leaderboards-column-name">Total</p>
            <p className="leaderboards-column-name">Progress</p>
          </div>
        </header>
        <section className="leaders-wrapper">
          {leaders}
        </section>
      </section>
    )
  }
}

export default Leaderboards;
