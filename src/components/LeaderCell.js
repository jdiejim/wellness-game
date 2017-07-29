import React from 'react';
import { getCrown } from '../utils/helpers';
import './styles/LeaderCell.css';

const LeaderCell = ({ leader, aggregate, index }) => {
  const { first_name, last_name, avatar, completed, total } = leader;
  const name = `${first_name} ${last_name}`;
  const progress = `${Math.round(completed / total * 100)}%`;
  const barStyle = { width: progress };
  const crownIcon = { backgroundImage: `url(${getCrown(index)})` }
  const crown = index < 3 ? <div style={crownIcon} className="crown"></div> : '';

  return (
    <article className="leader-cell">
      <div className="leader-info-wrapper">
        {crown}
        <div className="leader-avatar"></div>
        <h2 className="leader-name">{name}</h2>
        <div className="leader-chart">
          <div className="leader-bar" style={barStyle}></div>
        </div>
      </div>
      <div className="leader-stats-wrapper">
        <p className="leader-stat leader-completed">{completed}</p>
        <p className="leader-stat leader-total">{total}</p>
        <p className="leader-stat leader-progress">{progress}</p>
      </div>
    </article>
  )
}

export default LeaderCell;
