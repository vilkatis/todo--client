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
      case 'todo':
        switch ($event.action.type) {
          case 'select':
            this.store.dispatch(new fromStore.TodoActions.SelectList($event.action.payload));
            break;
          default:
            break;
        }
      default:
        break;
    }
  }
}
