import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const addClient = createAction<NewClient>(Actions.ADD_CLIENT);
export const addJob = createAction<NewJob>(Actions.ADD_JOB);
