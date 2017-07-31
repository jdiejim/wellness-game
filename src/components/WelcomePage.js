import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import demo from '../assets/wellness_demo.gif';
import LogInFormContainer from '../containers/LogInFormContainer';
import './styles/WelcomePage.css';

class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      anim: false,
    }

    this.handleLogInSuccess = this.handleLogInSuccess.bind(this);
  }

  componentDidMount() {
    window.addEventListener('animationend', this.handleLogInSuccess);
  }

  componentWillUnmount() {
    window.removeEventListener('animationend', this.handleLogInSuccess);
  }

  componentWillReceiveProps(np) {
    if (this.props.user.id !== np.user.id) {
      this.setState({ anim: !this.state.anim });
    }
  }

  handleLogInSuccess(e) {
    if (e.animationName !== 'login-appear' && e.animationName !== 'login-fail') {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { anim } = this.state;
    const welcomeClass = anim ? 'welcome-container banner-anim' : 'welcome-container';

    return (
      <section className={welcomeClass}>
        <nav className="welcome-nav">
          <NavLink activeClassName="tab-active" to="/about">How it works</NavLink>
          <NavLink activeClassName="tab-active" to="/signup">Join Now</NavLink>
          <NavLink activeClassName="tab-active" to="/login">Login</NavLink>
        </nav>
        <main className="welcome-main">
          <section className="welcome-msg">
            <h1 className="welcome-title">Wellness Game</h1>
            <p className="welcome-body">This Web app lets users track their wellness activities each week. Users can easily add their daily activities for each of the 4 categories: rest, nutrition, sweat, and personal wellness</p>
          </section>
          <section className="banner">
          </section>
          <section className="welcome-login-wrapper">
            <Route path="/about" render={() => {
              return (
                <div className="demo-pic-wrapper">
                  <img className="demo-pic" src={demo} alt="demo" />
                </div>
              )
            }} />
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={LogInFormContainer} />
          </section>
        </main>
      </section>
    )
  }
}

export default WelcomePage;
