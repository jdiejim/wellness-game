import React from 'react';
import { getBarLabelStyle,getBarStyle } from '../utils/helpers';
import './styles/Bar.css';

const Bar = ({ type, stat }) => {
  if (!stat) {
    return <div></div>
  }
  const progress = `${stat.progress}%`;
  const text = stat.progress === 0 ? '' : `${stat.progress}%`;

  return (
    <div className="bar-wrapper">
      <div
        style={getBarLabelStyle(type)}
        className="bar-label"></div>
      <div
        style={getBarStyle(type, progress)}
        className="bar">
        <p className="bar-value">{text}</p>
        </div>
    </div>
  )
}

export default Bar;
