import React from 'react';
import { getCrown } from '../utils/helpers';
import { Avatar } from '../elements';
import './styles/LeaderCell.css';

const LeaderCell = ({ leader, index }) => {
  const { first_name, last_name, avatar, completed, total } = leader;
  const name = `${first_name} ${last_name}`;
  const initials = `${first_name[0]}${last_name[0]}`;
  const progress = `${Math.round(completed / total * 100)}%`;
  const width = `${Math.round(completed / 28 * 100)}%`;
  const barStyle = { width };
  const crownIcon = { backgroundImage: `url(${getCrown(index)})` }
  const crown = index < 3 ? <div style={crownIcon} className="crown"></div> : '';

  return (
    <article className="leader-cell">
      <div className="leader-info-wrapper">
        {crown}
        <Avatar className='avatar' color={avatar} size={45} fontSize={1}>
          {initials}
        </Avatar>
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
