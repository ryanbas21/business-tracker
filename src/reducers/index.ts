import { combineReducers, Reducer } from 'redux';
import clients from './client';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  clients: IClient.ClientData[];
}

export default combineReducers<RootState>({
  clients,
  form: formReducer
});
