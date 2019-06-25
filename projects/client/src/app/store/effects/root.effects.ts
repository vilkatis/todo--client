import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { AuthActions } from '../actions';
import { Injectable } from '@angular/core';
import { AuthService } from '../../providers/services';

@Injectable()
export class RootEffects {
  @Effect()
  public init$: Observable<Action> = this.actions$
    .pipe(
      ofType(ROOT_EFFECTS_INIT),
      filter(() => !!this.authService.currentUser),
      map(() => new AuthActions.LoginSuccess(this.authService.currentUser))
    );

  public constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
