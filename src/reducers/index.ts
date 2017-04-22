import { combineReducers, Reducer } from 'redux';
import addClient from './client';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  clientsList: ClientItemData[];
}

export default combineReducers<RootState>({
  addClient,
  form: formReducer
});
