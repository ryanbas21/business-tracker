import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as Style from './style.css';
import * as clientActions from '../../actions/client';
import { AddClientForm } from '../../components';
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

@connect(mapStateToProps, mapDispatchToProps)
class AddClient extends React.Component<App.Props, App.State> {
  render() {
    const { children, actions, clients } = this.props;
    return (
      <Container className={Style.formContainer} textAlign='left'>
        <AddClientForm onSubmit={actions.addClient}/>
     </Container>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
      clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions as any, dispatch)
  };
}

export { AddClient };
