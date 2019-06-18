import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TodoActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IList } from '../../models';
import { TodoService } from '../../providers';

@Injectable()
export class TodoEffects {
  @Effect()
  public getAllLists$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.GET_ALL_LISTS_REQUEST),
      switchMap(() => {
        return this.todoService.getAllLists().pipe(
          map((lists: IList[]) => new TodoActions.GetAllListsSuccess(lists)),
          catchError((err: Error) => of(new TodoActions.GetAllListsFailure(err)))
        );
      })
    );

  public constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
  }
}
