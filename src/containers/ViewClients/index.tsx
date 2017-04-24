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

namespace ViewClientsContainer {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof clientActions;
    clients: string[];
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class ViewClientsContainer extends React.Component<ViewClientsContainer.Props, ViewClientsContainer.State> {
  render() {
    const { children, actions, clients } = this.props;
    return clients.length?
    <div className={Style.normal}>
    {clients.map((client, index) => <ViewClients key={index} client={[client]} deleteClient={actions.deleteClient}/>
        )}</div>
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
  console.log('state', state.clients);
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
