import React, { Component } from 'react';
import moment from 'moment';
import CalendarContainer from '../containers/CalendarContainer';
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
  }

  handleOnChange(e) {
    const { value, id: key } = e.target;

    this.setState({ [key]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { selectedDate: date, createActivities, user: { id: user_id }, fetchMonthlyActivities } = this.props;
    const keys = Object.keys(this.state);
    const activities = keys.map(activity => ({
      user_id,
      description: this.state[activity],
      type: activity,
      date
    }));

    createActivities(activities);
    fetchMonthlyActivities({ date, user_id })
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
    const { selectedDate, monthlyActivities } = this.props;
    const day = moment(selectedDate).format('D');
    const dayOfWeek = moment(selectedDate).format('dddd');
    const monthly = monthlyActivities.map(e => moment(e.date).format());
    const formClass = monthly.find(f => f === moment(selectedDate).format()) ? 'add-activity-form-exists' : 'add-activity-form';

    return (
      <section className="add-activity-view">
        <section className="add-activity-wrapper">
          <section className="left-wrapper">
            <section className="calendar-wrapper">
              <CalendarContainer />
            </section>
          </section>
          <form className={formClass} onSubmit={this.handleOnSubmit}>
            <header className="add-form-header">
              <h1 className="add-form-date">{day}</h1>
              <p className="add-form-day">{dayOfWeek}</p>
            </header>
            <section className="activity-input-wrapper">
              <article className="add-input-cell">
                <InputIcon icon={restIcon} />
                <AddInput
                  id="rest"
                  onChange={this.handleOnChange}
                  placeholder="eg. sleep +7"
                  value={rest}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={sweatIcon} />
                <AddInput
                  id="sweat"
                  onChange={this.handleOnChange}
                  placeholder="eg. run 5 miles"
                  value={sweat}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={nutritionIcon} />
                <AddInput
                  id="nutrition"
                  onChange={this.handleOnChange}
                  placeholder="eg. eat salad"
                  value={nutrition}
                />
              </article>
              <article className="add-input-cell">
                <InputIcon icon={personalIcon} />
                <AddInput
                  id="personal"
                  onChange={this.handleOnChange}
                  placeholder="eg. go to the movies"
                  value={personal}
                />
              </article>
            </section>
            <section className="add-btn-wrapper">
              {/* <AddSubmit
                onClick={this.handleSelectAll}
                type="button"
                value="Quick Week"
              /> */}
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
