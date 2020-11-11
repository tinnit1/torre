import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user/user.service';
import * as usersActions from '../actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService,
              private toast: ToastrService) {
  }


  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap(
        (action) => this.userService.getUser()
          .pipe(
            map(user => usersActions.loadUserSuccess({user}),
              catchError(err => {
                this.toast.error('Error at load Data');
                return of(usersActions.loadUserError({payload: err}));
              })))
      )
    )
  );
}
