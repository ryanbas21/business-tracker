import { combineReducers, Reducer } from 'redux';
import { ClientReducer } from './client';
import { JobsReducer } from './jobs';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  clients: IClient.Info[];
}

export default combineReducers<RootState>({
  clients: ClientReducer,
  jobs: JobsReducer,
  form: formReducer
});
