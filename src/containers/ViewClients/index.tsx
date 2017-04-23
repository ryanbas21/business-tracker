import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import * as style from './style.css';
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
  constructor() {
    super();
  }

  render() {
    const { children, actions, clients } = this.props;
    return (
      <div>
        {clients.map((client, index) =>
          <ViewClients
            key={index}
            client={[client]}
          />
        )}
     </div>
    );
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
