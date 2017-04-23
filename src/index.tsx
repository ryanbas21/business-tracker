import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import Navbar from './Navbar';
import { App, ViewClientsContainer } from './containers';
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
        <Route path="/addclient" component={App} />
        <Route path='/viewclients' component={ViewClientsContainer} />
      </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
