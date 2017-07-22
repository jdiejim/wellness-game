import React, { Component } from 'react';
import './styles/App.css';

import WelcomePageContainer from '../containers/WelcomePageContainer';
import SideBar from './SideBar';
import DashboardContainer from '../containers/DashboardContainer';
import AddActivityContainer from '../containers/AddActivityContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { history, user, location } = this.props;

    return (
      <main className="App">
        <SideBar />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/activities" component={AddActivityContainer} />
        <Route path="/login" component={WelcomePageContainer} />
        <Route path="/signup" component={WelcomePageContainer} />
      </main>
    );
  }
}

export default App;
