import * as React from 'react';
import { Input, Button, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as Style from './style.css';
import * as clientActions from '../../actions/client';
import { AddJobForm } from '../../components';
import Navbar from '../../Navbar';

namespace AddJob {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof clientActions;
    clients: string[];
    clientList: IClient.ClientList[];

  }

  export interface State {
   clients: IClient.Info[];
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class AddJobContainer extends React.Component<AddJob.Props, AddJob.State> {
  render() {
    const { children, actions, clientList } = this.props;
    return (
      <Container className={Style.formContainer} textAlign='left'>
        <AddJobForm onSubmit={actions.addClient}/>
      </Container>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    clientList: state.clients.map((client : IClient.Info) => (
      {name:`${client.firstName} ${client.lastName}`, value: client.clientId}))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions as any, dispatch)
  };
}

export { AddJobContainer };
