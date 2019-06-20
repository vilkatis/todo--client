import { Component } from '@angular/core';
import { IList, IState, ITask } from '../models';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { shareReplay } from 'rxjs/operators';
import { AbstractContainer } from '../helpers';
import { EventHandlerService } from '../providers/services';


@Component({
  selector: 'core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})

export class CoreComponent extends AbstractContainer {
  lists$: Observable<IList[]>;
  tasks$: Observable<ITask[]>;
  todoSelectedId$: Observable<string>;

  constructor(eventHandlerService: EventHandlerService, store: Store<IState>) {
    super(eventHandlerService);
    this.lists$ = store.pipe(select(fromStore.getTodoEntitiesOrderedArray));
    this.tasks$ = store.pipe(select(fromStore.getTodoSelectedTasks));
    this.todoSelectedId$ = store.pipe(select(fromStore.getTodoSelectedId));
  }
}
