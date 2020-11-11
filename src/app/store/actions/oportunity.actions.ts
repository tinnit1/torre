import {createAction, props} from '@ngrx/store';
import {Opportunities} from '../../models/opportunities';

export const loadOpportunity = createAction('[User Component] loadOpportunity', props<{ id: string }>());

export const loadOpportunitySuccess = createAction(
  '[Opportunity Component] loadOpportunity success',
  props<{ opportunity: Opportunities }>());

export const loadOpportunityError = createAction(
  '[Opportunity Component] loadOpportunity error',
  props<{ payload: any }>());
