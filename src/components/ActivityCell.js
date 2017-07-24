import React from 'react';
import './styles/ActivityCell.css';

const ActivityCell = ({ activity }) => {
  const { type, description } = activity;

  return (
    <section className={`list-cell`}>
      <header className={`${type}-list`}>
        {type}
      </header>
      <main>
        <h1>{description}</h1>
      </main>
    </section>
  )
}

export default ActivityCell;
