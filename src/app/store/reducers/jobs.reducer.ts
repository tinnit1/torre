import {createReducer, on} from '@ngrx/store';
import {loadJobs, loadJobsError, loadJobsSuccess} from '../actions/jobs.actions';
import {Work} from '../../models/work';

export interface JobsState {
  jobs: Work[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const jobsInitialState: JobsState = {
  jobs: [],
  loaded: false,
  loading: false,
  error: null
};

const _jobsReducer = createReducer(jobsInitialState,
  on(loadJobs, state => ({...state, loading: true})),
  on(loadJobsSuccess, (state, {jobs}) => ({
    ...state,
    loading: false,
    loaded: true,
    jobs: [...jobs]
  })),
  on(loadJobsError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      status: payload.status
    }
  })),
);

export function jobsReducer(state, action) {
  return _jobsReducer(state, action);
}
