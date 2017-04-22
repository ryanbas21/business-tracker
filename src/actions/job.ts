import { createAction } from 'redux-actions';
import * as Actions from '../constants/job';

export const addJob = createAction<IClient.Info>(Actions.ADD_JOB);
export const deleteJob = createAction<IClient.Info>(Actions.DELETE_JOB);
export const editJob = createAction<IClient.Info>(Actions.EDIT_JOB);
