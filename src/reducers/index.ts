import { combineReducers, Reducer } from 'redux';
import client from './client';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  clientsList: IClient.ClientData[];
}

export default combineReducers<RootState>({
  client,
  form: formReducer
});
