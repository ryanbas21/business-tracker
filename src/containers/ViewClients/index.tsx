import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Message } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import * as Style from './style.css';
import * as clientActions from '../../actions/client';
import Navbar from '../../Navbar';
import { ViewClients } from '../../components';
import autobind from 'autobind-decorator';

namespace ViewClientsContainer {
  export interface Props extends RouteComponentProps<void> {
    actions: ClientActions;
    clients: IClient.Info[];
  }
  export interface State {
    clients: IClient.Info[];
    form: FormData;
  }
  export interface ClientActions {
    deleteClient : (clientId: IClient.ClientId) => any;
  }
  export interface ClientArgument {
    firstName: string;
    lastName: string;
    clientId: IClient.ClientId;
  }
}

@autobind
@connect(mapStateToProps, mapDispatchToProps)
class ViewClientsContainer extends React.Component<ViewClientsContainer.Props, ViewClientsContainer.State> {
  render() {
    const { children, actions, clients } = this.props;
    return clients.length ?
    <div className={Style.normal}>
    {clients.map((client : ViewClientsContainer.ClientArgument, index : number) : JSX.Element => {
      console.log('client', client);
      return <ViewClients
        key={index}
        client={[client]}
        deleteClient={() => actions.deleteClient(client.clientId)}/>
    })}</div>
    : <Message>
          <Message.Header>
            No Client Data To Display
          </Message.Header>
            <p>
              Did You Want To <Link to='/addclients'>Add Clients</Link>?
            </p>
        </Message>
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

export { ViewClientsContainer };
