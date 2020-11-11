import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as jobsActions from '../actions/jobs.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {JobService} from '../../services/job/job.service';

@Injectable()
export class JobsEffects {
  constructor(private actions$: Actions,
              private jobsService: JobService) {
  }

  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType( jobsActions.loadJobs ),
      mergeMap(
        () => this.jobsService.getJobs()
          .pipe(
            map( jobs => jobsActions.loadJobsSuccess({jobs})),
            catchError( err => of(jobsActions.loadJobsError({payload: err})))
          )
      )
    )
  );
}
