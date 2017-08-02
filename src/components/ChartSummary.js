import React from 'react';
import Bar from './Bar';
import { getProgressByType } from '../utils/helpers';
import './styles/ChartSummary.css';

const ChartSummary = ({ activities, progress }) => {
  const { rest, nutrition, sweat, personal } = getProgressByType(activities);

  return (
    <section className="chart-summary">
      <h3 className="chart-title">Weekly Progress</h3>
      <article className="linear-bar">
        <Bar type="rest" stat={rest} />
        <Bar type="sweat" stat={sweat} />
        <Bar type="nutrition" stat={nutrition} />
        <Bar type="personal" stat={personal} />
      </article>
    </section>
  )
}

export default ChartSummary;
