import {createReducer, on} from '@ngrx/store';
import {loadOpportunity, loadOpportunityError, loadOpportunitySuccess} from '../actions/oportunity.actions';
import {Opportunities} from '../../models/opportunities';

export interface Opportunitystate {
  opportunity: Opportunities;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const opportunityInitialState: Opportunitystate = {
  opportunity: null,
  loaded: false,
  loading: false,
  error: null
};

const _opportunityReducer = createReducer(opportunityInitialState,
  on(loadOpportunity, (state) => ({
    ...state,
    loading: true
  })),
  on(loadOpportunitySuccess, (state, {opportunity}) => ({
    ...state,
    loading: false,
    loaded: true,
    opportunity: {...opportunity}
  })),
  on(loadOpportunityError, (state, {payload}) => ({
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

export function opportunityReducer(state, action) {
  return _opportunityReducer(state, action);
}
