import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/actions';
import { IState } from '../../store';
import { IEvent } from '../../models';

@Injectable({providedIn: 'root'})
export class EventHandlerService {
  constructor(private store: Store<IState>) {
  }

  public catchEvent($event: IEvent) {
    switch ($event.type) {
      case 'auth':
        switch ($event.action.type) {
          case 'login':
            this.store.dispatch(new fromStore.AuthActions.LoginRequest($event.action.payload));
            break;
          case 'register':
            this.store.dispatch(new fromStore.AuthActions.RegisterRequest($event.action.payload));
            break;
          case 'logout':
            this.store.dispatch(new fromStore.AuthActions.Logout());
            break;
          default:
            break;
        }
        break;
      case 'list':
        switch ($event.action.type) {
          case 'add':
            this.store.dispatch(new fromStore.TodoActions.AddNewListRequest($event.action.payload));
            break;
          case 'select':
            this.store.dispatch(new fromStore.TodoActions.SelectList($event.action.payload));
            break;
          case 'removeCompleted':
            this.store.dispatch(new fromStore.TodoActions.RemoveCompletedTasksRequest($event.action.payload));
            break;
          default:
            break;
        }
        break;
      case 'task':
        switch ($event.action.type) {
          case 'add':
            this.store.dispatch(new fromStore.TodoActions.AddTaskRequest($event.action.payload));
            break;
          case 'update':
            this.store.dispatch(new fromStore.TodoActions.UpdateTaskRequest($event.action.payload));
            break;
          case 'delete':
            this.store.dispatch(new fromStore.TodoActions.DeleteTaskRequest($event.action.payload));
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
}
