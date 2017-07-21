import React, { Component } from 'react';
import { InputText, InputSubmit, LoginTitle } from '../elements';
import './styles/LogInForm.css';

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
      password: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleOnChange(e) {
    const { value, id: key } = e.target;

    this.setState({ [key]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { location: { pathname } } = this.props;

    if (pathname === '/signup') {
      this.handleSignUp();
    } else {
      this.handleLogIn();
    }

    this.clearState();
  }

  clearState() {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
      password: ''
    });
  }

  handleLogIn() {
    const { email, password } = this.state;
    const { logIn } = this.props;

    logIn({ email, password });
  }

  handleSignUp() {
    const { first_name, last_name, email, password } = this.state;
    const { signUp } = this.props;

    signUp({ first_name, last_name, email, password });
  }

  render() {
    const { first_name, last_name, email, password } = this.state;
    const { location: { pathname } } = this.props;
    const title = pathname === '/login' ? 'Log In' : 'Sign Up';

    return (
      <form className="login-form" onSubmit={this.handleOnSubmit}>
        <LoginTitle>{title}</LoginTitle>
        <section className="input-wrapper">
          <InputText
            id="first_name"
            path={pathname}
            onChange={this.handleOnChange}
            value={first_name}
            placeholder="First Name"
          />
          <InputText
            id="last_name"
            path={pathname}
            onChange={this.handleOnChange}
            value={last_name}
            placeholder="Last Name"
          />
          <InputText
            id="email"
            type="email"
            onChange={this.handleOnChange}
            value={email}
            placeholder="Email"
          />
          <InputText
            id="password"
            type="password"
            onChange={this.handleOnChange}
            value={password}
            placeholder="Password"
          />
        </section>
        <section className="login-submit-wrapper">
          <InputSubmit id="submit-btn" path={pathname} />
          {/* <p>or create an account</p> */}
        </section>
      </form>
    )
  }
}

export default LogInForm
