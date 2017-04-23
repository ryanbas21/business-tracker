import * as React from 'react';
import * as ReactDOM from 'react-dom';
//require('semantic-ui-css/semantic.min.css');
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { AppContainer } from './containers/';
import Navbar from './Navbar';
import {
  AddClientForm,
  Home,
 } from './components';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/addclient" component={AppContainer} />
      </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
