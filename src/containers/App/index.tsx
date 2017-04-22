import * as React from 'react';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as clientActions from '../../actions/client';
import { AddClientForm } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof clientActions;
    clients: string[];
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {
  constructor() {
    super();
  }

  render() {
    const { children, actions, clients } = this.props;
    return (
      <div className={style.normal}>
        <AddClientForm />
        {children}
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
