import { handleActions } from 'redux-actions';
import * as Actions from '../constants/client';

const initialState: IClient.Info[] = [];

export default handleActions<IClient.Info[], IClient.ClientData>({

  [Actions.ADD_CLIENT]: (state, action) => {
    console.log('dispatched add client');
    return [action.payload, ...state]
  },
  [Actions.EDIT_CLIENT]: (state, action) => {
    console.log('dispatched edit client');
  },
  [Actions.DELETE_CLIENT]: (state, action) => {
    console.log('dispatched delete client');
    return state.filter(client => client.id !== action.payload.id)

  },
  [Actions.VIEW_CLIENTS]: (state, action) => {
    console.log('dispatched view clients');
    return state;
  }


}, initialState);
