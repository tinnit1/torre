import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  user: reducers.Userstate;
  opportunity: reducers.Opportunitystate;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  opportunity: reducers.opportunityReducer
};
