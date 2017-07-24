import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import WelcomePageContainer from './containers/WelcomePageContainer';
import './index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <section>
        <Route path="/" component={AppContainer} />
        <Route path="/login" type='replace' component={WelcomePageContainer} />
        <Route path="/signup" type='replace' component={WelcomePageContainer} />
      </section>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
