import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as style from './style.css';
import * as clientActions from '../../actions/client';
import { AddClientForm, FormComponent } from '../../components';
import Navbar from '../../Navbar';

namespace App {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof clientActions;
    clients: string[];
  }

  export interface State {
    /* empty */
  }
}

class AppContainer extends React.Component<App.Props, App.State> {
  constructor() {
    super();
  }

  render() {
    const { children, actions, clients } = this.props;
    return (
      <div className={style.normal}>
        <FormComponent />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
      clients: ['one','two','three']
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions as any, dispatch)
  };
}

export connect(mapStateToProps, mapDispatchToProps, FormComponent)(AppContainer);
