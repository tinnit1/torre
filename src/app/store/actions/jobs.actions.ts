import {createAction, props} from '@ngrx/store';
import {Work} from '../../models/work';

export const loadJobs = createAction('[Jobs Component] loadJobs');

export const loadJobsSuccess = createAction(
  '[Jobs Component] loadJobs success',
  props<{jobs: Work[]}>());

export const loadJobsError = createAction(
  '[Jobs Component] loadJobs error',
  props<{payload: any}>());
