import { createAction } from 'redux-actions';
import * as Actions from '../constants/client';

export const addClient = createAction<IClient.Info>(Actions.ADD_CLIENT);
export const deleteClient = createAction(Actions.DELETE_CLIENT, (clientId: IClient.ClientId) : IClient.ClientId=> clientId);
export const editClient = createAction<IClient.Info>(Actions.EDIT_CLIENT);
export const viewClients = createAction<IClient.Info>(Actions.VIEW_CLIENTS);
