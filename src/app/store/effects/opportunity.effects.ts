import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as opportunityActions from '../actions/oportunity.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {OpportunityService} from '../../services/opportunity/opportunity.service';

@Injectable()
export class OpportunityEffects {
  constructor(private actions$: Actions,
              private opportunityService: OpportunityService,
              private toast: ToastrService) {
  }


  loadOpportunity$ = createEffect(
    () => this.actions$.pipe(
      ofType(opportunityActions.loadOpportunity),
      mergeMap(
        (action) => this.opportunityService.getOpportunity(action.id)
          .pipe(
            map(opportunity => opportunityActions.loadOpportunitySuccess({opportunity}),
              catchError(err => {
                this.toast.error('Error at load Data');
                return of(opportunityActions.loadOpportunityError({payload: err}));
              })))
      )
    )
  );
}
