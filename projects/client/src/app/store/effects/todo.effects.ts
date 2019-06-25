import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TodoActions } from '../actions';
import { catchError, concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { IList, ITask } from '../../models';
import { TodoService } from '../../providers';

@Injectable()
export class TodoEffects {
  @Effect()
  public getAllLists$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.GET_ALL_LISTS_REQUEST),
      switchMap(() => {
        return this.todoService.getAllLists().pipe(
          concatMap((lists: IList[]) => [new TodoActions.GetAllListsSuccess(lists), new TodoActions.SelectList(lists[0].id)]),
          catchError((err: Error) => of(new TodoActions.GetAllListsFailure(err)))
        );
      })
    );

  @Effect()
  public addList$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.ADD_NEW_LIST_REQUEST),
      map((action: TodoActions.AddNewListRequest) => action.payload),
      switchMap((listName: string) => {
        return this.todoService.createList(listName).pipe(
          concatMap((listId: string) => [new TodoActions.AddNewListSuccess({id: listId, name: listName}), new TodoActions.SelectList(listId)]),
          catchError((err: Error) => of(new TodoActions.AddNewListFailure(err)))
        );
      })
    );

  @Effect({dispatch: false})
  public addListFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.ADD_NEW_LIST_FAILURE),
      tap(() => alert('Failed to add list.'))
    );

  @Effect()
  public addTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.ADD_TASK_REQUEST),
      map((action: TodoActions.AddTaskRequest) => action.payload),
      switchMap(({listId, taskName}: { listId: string, taskName: string }) => {
        return this.todoService.addTask(listId, taskName).pipe(
          map((taskId: string) => new TodoActions.AddTaskSuccess({
            listId,
            task: {id: taskId, name: taskName, isCompleted: false}
          })),
          catchError((err: Error) => of(new TodoActions.AddTaskFailure(err)))
        );
      })
    );

  @Effect({dispatch: false})
  public addTaskFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.ADD_TASK_FAILURE),
      tap(() => alert('Failed to add task.'))
    );

  @Effect()
  public updateTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.UPDATE_TASK_REQUEST),
      map((action: TodoActions.UpdateTaskRequest) => action.payload),
      switchMap(({listId, task}: { listId: string, task: ITask }) => {
        return this.todoService.updateTask(listId, task).pipe(
          map((success: boolean) => {
            if (success) return new TodoActions.UpdateTaskSuccess({listId, task});
            throw new Error('Failed to update task');
          }),
          catchError((err: Error) => of(new TodoActions.UpdateTaskFailure(err)))
        );
      })
    );

  @Effect({dispatch: false})
  public updateTaskFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.UPDATE_TASK_FAILURE),
      tap(() => alert('Failed to update task.'))
    );


  @Effect()
  public deleteTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.DELETE_TASK_REQUEST),
      map((action: TodoActions.DeleteTaskRequest) => action.payload),
      switchMap(({listId, taskId}: { listId: string, taskId: string }) => {
        return this.todoService.deleteTask(listId, taskId).pipe(
          map((success: boolean) => {
            if (success) return new TodoActions.DeleteTaskSuccess({listId, taskId});
            throw new Error('Failed to delete task');
          }),
          catchError((err: Error) => of(new TodoActions.DeleteTaskFailure(err)))
        );
      })
    );

  @Effect({dispatch: false})
  public deleteTaskFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.DELETE_TASK_FAILURE),
      tap(() => alert('Failed to delete task.'))
    );

  @Effect()
  public removeCompletedTasks$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.REMOVE_COMPLETED_TASKS_REQUEST),
      map((action: TodoActions.RemoveCompletedTasksRequest) => action.payload),
      switchMap((listId: string) => {
        return this.todoService.removeCompletedTasks(listId).pipe(
          map((taskIds: string[]) => new TodoActions.RemoveCompletedTasksSuccess({listId, taskIds})),
          catchError((err: Error) => of(new TodoActions.RemoveCompletedTasksFailure(err)))
        );
      })
    );

  @Effect({dispatch: false})
  public removeCompletedTasksFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType(TodoActions.ActionTypes.REMOVE_COMPLETED_TASKS_FAILURE),
      tap(() => alert('Failed to remove completed tasks.'))
    );

  public constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
  }
}
