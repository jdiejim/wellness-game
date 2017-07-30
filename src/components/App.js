import React, { Component } from 'react';
import moment from 'moment';
import SideBar from './SideBar';
import DashboardContainer from '../containers/DashboardContainer';
import AddActivityContainer from '../containers/AddActivityContainer';
import LeaderboardsContainer from '../containers/LeaderboardsContainer';
import { Route, Redirect } from 'react-router-dom';
import { AddSubmit } from '../elements';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { selectDate } = this.props;

    selectDate(moment().format());
  }

  handleLogOut() {
    const { logOut, history } = this.props;

    logOut();
    history.push('/login')
  }

  render() {
    const { user, location: { pathname } } = this.props;
    const appClassName = pathname === '/login' || pathname === '/signup' ? 'App hidden' : 'App';

    if (!user.id) {
      return <Redirect to="/login" />
    }

    return (
      <main className={appClassName}>
        <SideBar className="side-bar" user={user} />
        <header className="main-header">
          <AddSubmit
            onClick={this.handleLogOut}
            className="logout"
            type="submit"
            value="Log Out"
            color="#303F9F"
          />
        </header>
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/activities" component={AddActivityContainer} />
        <Route path="/leaderboards" component={LeaderboardsContainer} />
      </main>
    );
  }
}

export default App;
