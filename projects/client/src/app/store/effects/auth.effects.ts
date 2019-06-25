import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthActions, TodoActions } from '../actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IUser } from '../../models';
import { AuthService } from '../../providers/services';

@Injectable()
export class AuthEffects {
  @Effect()
  public login$: Observable<Action> = this.actions$
    .pipe(
      ofType(AuthActions.ActionTypes.LOGIN_REQUEST),
      map((action: AuthActions.LoginRequest) => action.payload),
      switchMap((payload: IUser) => {
        return this.authService.login(payload.username, payload.password).pipe(
          map((user: IUser) => new AuthActions.LoginSuccess({token: user.token, username: payload.username})),
          catchError((err: Error) => of(new AuthActions.LoginFailure(err)))
        );
      })
    );

  @Effect()
  public init$: Observable<Action> = this.actions$
    .pipe(
      ofType(AuthActions.ActionTypes.LOGIN_SUCCESS, AuthActions.ActionTypes.REGISTER_SUCCESS),
      map(() => new TodoActions.GetAllListsRequest())
    );

  @Effect()
  public register$: Observable<Action> = this.actions$
    .pipe(
      ofType(AuthActions.ActionTypes.REGISTER_REQUEST),
      map((action: AuthActions.RegisterRequest) => action.payload),
      switchMap((payload: IUser) => {
        return this.authService.register(payload.username, payload.password).pipe(
          map((user: IUser) => new AuthActions.RegisterSuccess({token: user.token, username: payload.username})),
          catchError((err: Error) => of(new AuthActions.RegisterFailure(err)))
        );
      })
    );

  @Effect()
  public logout$: Observable<Action> = this.actions$
    .pipe(
      ofType(AuthActions.ActionTypes.LOGOUT),
      tap(this.authService.logout)
    );

  public constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
