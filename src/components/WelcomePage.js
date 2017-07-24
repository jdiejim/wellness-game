import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LogInFormContainer from '../containers/LogInFormContainer';
import { Banner } from '../elements';
import './styles/WelcomePage.css';

class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      anim: false
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
    if (e.animationName !== 'login-appear') {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { anim } = this.state;

    return (
      <section className="welcome-container">
        <nav className="welcome-nav">
          About
          <Link to="/signup">signup</Link>
          <Link to="/login">login</Link>
        </nav>
        <main className="welcome-main">
          <Banner anim={anim} size={2} />
          <section className="welcome-login-wrapper">
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={LogInFormContainer} />
          </section>
        </main>
      </section>
    )
  }
}

export default WelcomePage;
