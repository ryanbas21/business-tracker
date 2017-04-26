import { handleActions } from 'redux-actions';
import * as Actions from '../constants/job';

const initialState: IJob.Info[] = [];

export const JobsReducer = handleActions<IJob.Info[], IJob.Info>({

  [Actions.ADD_JOB]: (state, action) => {
    return [action.payload, ...state]
  },
  [Actions.EDIT_JOB]: (state, action) => {
    return
  },
  [Actions.DELETE_JOB]: (state, action: { payload: number }) => {
    return state.filter(job => job.jobId !== action.payload);
  },
}, initialState);
