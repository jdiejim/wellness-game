import React, { Component } from 'react';
import './styles/App.css';
import SideBar from './SideBar';
import DashboardContainer from '../containers/DashboardContainer';
import AddActivityContainer from '../containers/AddActivityContainer';
import LeaderboardsContainer from '../containers/LeaderboardsContainer';
import { Route, Redirect } from 'react-router-dom';
import { AddSubmit, Avatar } from '../elements';

class App extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logOut, history } = this.props;

    logOut();
    history.push('/login')
  }

  render() {
    const { user, user: { first_name, last_name, avatar, id }, location: { pathname } } = this.props;
    const appClassName = pathname === '/login' || pathname === '/signup' ? 'App hidden' : 'App';

    if (!id) {
      return <Redirect to="/login" />
    }

    const initials = `${first_name[0]}${last_name[0]}`
    const name = `${first_name }${last_name }`

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
