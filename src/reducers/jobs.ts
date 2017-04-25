import { handleActions } from 'redux-actions';
import * as Actions from '../constants/job';

const initialState: IJob.Info[] = [];

export default handleActions<IJob.Info[], IJob.Jobs>({

  [Actions.ADD_JOB]: (state, action) => {
    return [action.payload, ...state]
  },
  [Actions.EDIT_JOB]: (state, action) => {
    console.log('dispatched edit job');
  },
  [Actions.DELETE_JOB]: (state, action: { payload: number }) => {
    return state.filter(job => job.jobId !== action.payload);
  },
}, initialState);
