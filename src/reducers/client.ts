import { handleActions } from 'redux-actions';
import * as Actions from '../constants/client';

const initialState: IClient.Info[] = [];

export const ClientReducer = handleActions<IClient.Info[], any>({

  [Actions.ADD_CLIENT]: (state, { payload }) => {
    const client = Object.assign(payload, { clientId: Date.now() });
    return [client, ...state]
  },
  [Actions.EDIT_CLIENT]: (state, { payload }) => {
    return state.map((client : IClient.Info) => {
      if (client.clientId === payload.clientId) return payload;
      return client;
    });
  },
  [Actions.DELETE_CLIENT]: (state, { payload }) => {
    return state.filter((client: IClient.Info) => client.clientId !== payload);
  },
  [Actions.VIEW_CLIENTS]: (state, action) => {
    return state;
  }


}, initialState);
