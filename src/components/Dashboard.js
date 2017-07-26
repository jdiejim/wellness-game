import React, { Component } from 'react';
import moment from 'moment';
import ActivityCell from './ActivityCell';
import CategoryChart from './CategoryChart';
import CircularProgressbar from 'react-circular-progressbar';
import { getKey } from '../utils/constants';
import './styles/Dashboard.css';
import next from '../assets/next.svg';
import back from '../assets/back.svg';
import { NextButton } from '../elements';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    const { fetchUsers, users, getToday, fetchActivities, user } = this.props;
    if (!users.length) {
      fetchUsers();
    }
    // getToday();
    const date = moment().format();
    fetchActivities({ date, user_id: user.id });
  }

  handleChangeDay() {
    // const { id } = e.target;
    // // const { selectDate, selectedDate, changeMonth } = this.props;
    // const day = moment().format('DD');
    // let month;
    // let year;
    //
    // switch (id) {
    //   case 'next':
    //     month = moment(selectedDate).add(1, 'month').format('MM');
    //     year = moment(selectedDate).add(1, 'month').format('YYYY');
    //     break;
    //   default:
    //     month = moment(selectedDate).subtract(1, 'month').format('MM');
    //     year = moment(selectedDate).subtract(1, 'month').format('YYYY');
    //     break;
    // }
    // const date = `${year}-${month}-${day}T09:20:56-06:00`;
    //
    // selectDate(date);
    // changeMonth(this.getDaysList(date));
  }

  render() {
    const { activities } = this.props;
    const activitiesList = activities.map(activity => <ActivityCell key={getKey()} activity={activity} />)

    return (
      <section className="dashboard">
        <section className="charts-wrapper">
          <section className="summary-wrapper">

            <div className="totals">
              <article className="totals-cell">
                <p className="totals-cell-title">Pending</p>
                <p className="totals-cell-value">10</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Completed</p>
                <p className="totals-cell-value">8</p>
              </article>
              <article className="totals-cell">
                <p className="totals-cell-title">Incompleted</p>
                <p className="totals-cell-value">2</p>
              </article>
            </div>

            <div className="weekly-progress">
              <h2 className="weekly-title">Weekly Progress</h2>
              <CircularProgressbar percentage={75} initialAnimation={true} />
            </div>

          </section>
          <CategoryChart />
        </section>
        <section className="activities-wrapper">
          <section className="dashboard-calendar">
            <NextButton id="dash-previous" icon={back} scale={1.5} />
            <div className="dash-days-list">
              <div className="dash-day">
                Jul 23
              </div>
              <div className="dash-day">
                Jul 24
              </div>
              <div className="dash-main">
                Jul 25
              </div>
              <div className="dash-day">
                Jul 26
              </div>
              <div className="dash-day">
                Jul 27
              </div>
            </div>
            <NextButton id="dash-next" icon={next} scale={1.5} />
          </section>
          <section className="activities-list">
            {activitiesList}
          </section>
        </section>
      </section>
    )
  }
}

export default Dashboard;
