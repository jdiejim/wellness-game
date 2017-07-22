import React, { Component } from 'react';
import './styles/AddActivityView.css';

class AddActivityView extends Component {
  constructor() {
    super();
    this.state = {
      rest: '',
      nutrition: '',
      sweat: '',
      personal: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleOnChange(e) {
    const { value, id: key } = e.target;

    this.setState({ [key]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const { rest, sweat, nutrition, personal } = this.state;
    const { createActivities, user: { id: user_id } } = this.props;
    const keys = Object.keys(this.state);

    const activities = keys.map(activity => ({
      user_id,
      description: this.state[activity],
      type: activity,
    }));

    createActivities(activities);

    this.clearState();
  }

  clearState() {
    this.setState({
      rest: '',
      nutrition: '',
      sweat: '',
      personal: '',
    });
  }

  render() {
    const { rest, nutrition, sweat, personal } = this.state;

    return (
      <div className="add-activity-view">
        <form onSubmit={this.handleOnSubmit}>
          <input id="rest" onChange={this.handleOnChange} placeholder="rest" value={rest} />
          <input id="sweat" onChange={this.handleOnChange} placeholder="sweat" value={sweat} />
          <input id="nutrition" onChange={this.handleOnChange} placeholder="nutrition" value={nutrition} />
          <input id="personal" onChange={this.handleOnChange} placeholder="personal" value={personal} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default AddActivityView;
