import React, { Component } from 'react';
import './styles/App.css';
import WelcomePageContainer from '../containers/WelcomePageContainer';
import SideBar from './SideBar';
import DashboardContainer from '../containers/DashboardContainer';
import AddActivityContainer from '../containers/AddActivityContainer';
import { Route, Redirect } from 'react-router-dom';
import { AddSubmit } from '../elements';

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
    const { history, user, location } = this.props;

    if (!user.id) {
      return <Redirect to="/login" />
    }

    return (
      <main className="App">
        <SideBar />
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
      </main>
    );
  }
}

export default App;
