import React, { Component } from 'react';
import moment from 'moment';
import SideBar from './SideBar';
import DashboardContainer from '../containers/DashboardContainer';
import AddActivityContainer from '../containers/AddActivityContainer';
import AccountabilityContainer from '../containers/AccountabilityContainer';
import LeaderboardsContainer from '../containers/LeaderboardsContainer';
import { Route, Redirect } from 'react-router-dom';
import { AddSubmit } from '../elements';
import { toggleClass } from '../utils/helpers';
import menu from '../assets/menu.svg';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: true
    }

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);
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

  handleShowMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { showMenu } = this.state;
    const { user, location: { pathname } } = this.props;
    const appClassName = pathname === '/login' || pathname === '/signup' ? 'App hidden' : 'App';
    const menuIcon = { backgroundImage: `url(${menu})` };
    const sideBarClass = toggleClass(showMenu, '', ' side-bar-active');

    if (!user.id) {
      return <Redirect to="/about" />
    }

    return (
      <main className={appClassName + sideBarClass}>
        <SideBar className={sideBarClass} user={user} />
        <header className="main-header">
          <div
            onClick={this.handleShowMenu}
            className="menu-icon"
            style={menuIcon}></div>
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
        <Route path="/accountability" component={AccountabilityContainer} />
      </main>
    );
  }
}

export default App;
