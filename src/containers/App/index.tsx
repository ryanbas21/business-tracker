import * as React from 'react';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as ClientActions from '../../actions/client';
import { AddClientForm } from '../../components/index';

export namespace App {
  export interface Props extends RouteComponentProps<void> {

  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {
  constructor() {
    super();
    this.addClient = this.addClient.bind(this);
  }
  addClient(values) {
    console.log(values);
  }

  render() {
    const { children } = this.props;
    return (
      <div className={style.normal}>
        <AddClientForm  addClient={this.addClient} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
      clients: state.clientsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ClientActions as any, dispatch)
  };
}
