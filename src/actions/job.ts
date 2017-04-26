import { createAction } from 'redux-actions';
import * as Actions from '../constants/job';

export const addJob = createAction<IJob.Info>(Actions.ADD_JOB);
export const deleteJob = createAction(Actions.DELETE_JOB, jobid => jobid);
export const editJob = createAction<IJob.Info>(Actions.EDIT_JOB);
