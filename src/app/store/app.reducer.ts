import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  user: reducers.Userstate;
  opportunity: reducers.Opportunitystate;
  jobs: reducers.JobsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  opportunity: reducers.opportunityReducer,
  jobs: reducers.jobsReducer
};
