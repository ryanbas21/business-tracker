import { handleActions } from 'redux-actions';
import * as Actions from '../constants/client';

const initialState: IClient.Info[] = [];

export default handleActions<IClient.Info[], IClient.ClientData>({

  [Actions.ADD_CLIENT]: (state, action) => {
    const client = Object.assign(action.payload, { clientId: Date.now() });
    console.log(client);
    return [client, ...state]
  },
  [Actions.EDIT_CLIENT]: (state, action) => {
    console.log('dispatched edit client');
  },
  [Actions.DELETE_CLIENT]: (state, action: { payload: number }) => {
    console.log('dispatched delete client', action);
    console.log('here', action.payload);
    return state.filter(client => client.clientId !== action.payload);

  },
  [Actions.VIEW_CLIENTS]: (state, action) => {
    console.log('dispatched view clients');
    return state;
  }


}, initialState);
