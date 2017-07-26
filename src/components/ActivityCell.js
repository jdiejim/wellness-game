import React, { Component } from 'react';
import rest from '../assets/rest.svg';
import nutrition from '../assets/nutrition.svg';
import personal from '../assets/personal.svg';
import sweat from '../assets/sweat.svg';
import success from '../assets/success.svg';
import './styles/ActivityCell.css';

class ActivityCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { status: isCompleted } = this.props.activity;

    this.setState({ isCompleted });
  }

  handleOnClick() {
    this.setState({ isCompleted: !this.state.isCompleted });
  }

  render() {
    const { isCompleted } = this.state;
    const { type, description, status } = this.props.activity;
    const icons = {
      rest: { icon: rest, color: '#3F51B5'},
      nutrition: { icon: nutrition, color: '#54b3a7'},
      sweat: { icon: sweat, color: '#2b2b2b'},
      personal: { icon: personal, color: '#f27474'}
    };
    const icon = {
      backgroundImage: `url(${icons[type].icon})`,
      backgroundColor: icons[type].color
    };

    const buttonClass = isCompleted ? 'success-btn' : 'complete-btn';
    const successIcon = isCompleted ? success : '';
    const buttonIcon = { backgroundImage: `url(${successIcon})` };

    return (
      <section className="list-cell">
        <div className="info-separator">
          <div className="activity-type" style={icon}></div>
          <h2 className="description">{description}</h2>
        </div>
        <button onClick={this.handleOnClick} className={buttonClass} style={buttonIcon}>pending</button>
      </section>
    )
  }
}

export default ActivityCell;
