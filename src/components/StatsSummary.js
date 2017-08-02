import React from 'react';
import ChartSummary from './ChartSummary';
import { getStats } from '../utils/helpers';
import './styles/StatsSummary.css';

const StatsSummary = ({ userWeeklyActivities }) => {
  const { total, completed, pending, overdue } = getStats(userWeeklyActivities);
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="stats-wrapper">
      <section className="summary-wrapper">
        <h2 className="weekly-title">Weekly Stats</h2>
        <div className="totals">
          <article className="totals-cell">
            <p className="totals-cell-title">On Progress</p>
            <p className="totals-cell-value">{pending}</p>
          </article>
          <article className="totals-cell">
            <p className="totals-cell-title">Completed</p>
            <p className="totals-cell-value">{completed}</p>
          </article>
          <article className="totals-cell">
            <p className="totals-cell-title">Overdue</p>
            <p className="totals-cell-value">{overdue}</p>
          </article>
        </div>
      </section>
      <section className="chart-summary-wrapper">
        <ChartSummary progress={progress} activities={userWeeklyActivities} />
      </section>
    </section>
  )
}

export default StatsSummary;
