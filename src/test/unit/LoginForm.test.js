import React from 'react';
import LoginForm from '../../components/LoginForm';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
  const logIn = (body) => body;
  const signUp = (body) => body;

  it('should render correct component when it mounts', () => {
    const location = { pathname: '/login' };
    const wrapper = shallow(
      <LoginForm
        logIn={logIn}
        signUp={signUp}
        userFail={false}
        location={location}
       />
    );

    expect(wrapper.find('.input-wrapper').length).toBe(1);
  });

  it('should have initial state', () => {
    const location = { pathname: '/login' };
    const wrapper = shallow(
      <LoginForm
        logIn={logIn}
        signUp={signUp}
        userFail={false}
        location={location}
       />
    );
    const expected = {
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
      password: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('should render email and password input if login path', () => {
    const location = { pathname: '/login' };
    const wrapper = shallow(
      <LoginForm
        logIn={logIn}
        signUp={signUp}
        userFail={false}
        location={location}
       />
    );

    expect(wrapper.find('#email').length).toBe(1);
    expect(wrapper.find('#password').length).toBe(1);
  })

  it('should render first_name, last_name, email and password input if signup path', () => {
    const location = { pathname: '/signup' };
    const wrapper = shallow(
      <LoginForm
        logIn={logIn}
        signUp={signUp}
        userFail={false}
        location={location}
       />
    );

    expect(wrapper.find('#first_name').length).toBe(1);
    expect(wrapper.find('#last_name').length).toBe(1);
    expect(wrapper.find('#email').length).toBe(1);
    expect(wrapper.find('#password').length).toBe(1);
  });

  it('should modify change when handleOnChange is triggered', () => {
    const location = { pathname: '/signup' };
    const wrapper = shallow(
      <LoginForm
        logIn={logIn}
        signUp={signUp}
        userFail={false}
        location={location}
       />
    );
    const expected = {
      first_name: 'first',
      last_name: 'last',
      email: 'email',
      avatar: 'avatar',
      password: 'password',
      avatar: ''
    }

    const firstName = wrapper.find('#first_name');
    const lastName = wrapper.find('#last_name');
    const email = wrapper.find('#email');
    const password = wrapper.find('#password');

    firstName.simulate('change', { target: { value: 'first', id: 'first_name' } });
    lastName.simulate('change', { target: { value: 'last', id: 'last_name' } });
    email.simulate('change', { target: { value: 'email', id: 'email' } });
    password.simulate('change', { target: { value: 'password', id: 'password' } });

    expect(wrapper.state()).toEqual(expected);
  });
});
