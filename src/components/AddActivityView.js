import React, { Component } from 'react';
import Calendar from './Calendar';
import restIcon from '../assets/rest.svg';
import nutritionIcon from '../assets/nutrition.svg';
import sweatIcon from '../assets/sweat.svg';
import personalIcon from '../assets/personal.svg';
import { AddInput, InputIcon, AddSubmit } from '../elements';
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
    this.handleSelectAll = this.handleSelectAll.bind(this);
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

  handleSelectAll() {
    console.log('hello');
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
      <section className="add-activity-view">
        <section className="add-activity-wrapper">
          <section className="left-wrapper">
            <section className="calendar-wrapper">
              <Calendar />
            </section>
          </section>
          <form className="add-activity-form" onSubmit={this.handleOnSubmit}>
            <header className="add-form-header">
              <h1 className="add-form-date">17</h1>
              <p className="add-form-day">Sunday</p>
            </header>
            <section className="activity-input-wrapper">
              <article className="add-input-cell">
                <InputIcon icon={restIcon} />
                <AddInput
                  id="rest"
                  onChange={this.handleOnChange}
                  placeholder="rest"
                  value={rest}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={sweatIcon} />
                <AddInput
                  id="sweat"
                  onChange={this.handleOnChange}
                  placeholder="sweat"
                  value={sweat}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={nutritionIcon} />
                <AddInput
                  id="nutrition"
                  onChange={this.handleOnChange}
                  placeholder="nutrition"
                  value={nutrition}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={personalIcon} />
                <AddInput
                  id="personal"
                  onChange={this.handleOnChange}
                  placeholder="personal"
                  value={personal}
                />
              </article>
            </section>
            <section className="add-btn-wrapper">
              <AddSubmit
                onClick={this.handleSelectAll}
                type="button"
                value="Quick Week"
              />
              <AddSubmit
                type="submit"
                value="Submit"
              />
            </section>
          </form>
        </section>
      </section>
    )
  }
}

export default AddActivityView;
