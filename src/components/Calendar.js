import React, { Component } from 'react';
import next from '../assets/next.svg';
import back from '../assets/back.svg';
import { NextButton, Day } from '../elements';
import './styles/Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <section className="calendar">
        <header className="calendar-header">
          <NextButton icon={back} />
          <h1 className="calendar-month">July 2017</h1>
          <NextButton icon={next} />
        </header>
        <section className="calendar-body">
          <Day>S</Day>
          <Day>M</Day>
          <Day>T</Day>
          <Day>W</Day>
          <Day>T</Day>
          <Day>F</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day active={true}>333</Day>
          <Day>32</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
          <Day>S</Day>
        </section>
      </section>
    )
  }
}

export default Calendar;
