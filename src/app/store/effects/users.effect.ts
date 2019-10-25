import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../../users/services/user.service';
import * as fromActions from '../actions/user.actions';
import { Action } from '@ngrx/store';
import { User } from 'src/app/users/interfaces/user';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadUsers),
      mergeMap(action =>
        this.userService.getUserList().pipe(
          map(users => fromActions.loadUsersSuccess({ users })),
          catchError(err => of(err))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createUser),
      mergeMap(action =>
        this.userService.createUser(action.user).pipe(
          map(user => fromActions.createUserSuccess({ user })),
          catchError(err => of(err))
        )
      )
    )
  );

  deleteUser = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteUser),
      switchMap(action =>
        this.userService.deleteUser(action.id).pipe(
          map(id => fromActions.deleteUserSuccess({ id })),
          catchError(err => of(err))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
