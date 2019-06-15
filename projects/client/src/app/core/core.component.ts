import { Component } from '@angular/core';
import { IList, IState, ITask } from '../models';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { shareReplay } from 'rxjs/operators';


@Component({
  selector: 'core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})

export class CoreComponent {
  lists$: Observable<IList[]>;
  listsSelectedId$: Observable<string>;
  tasks$: Observable<ITask[]>;

  constructor(store: Store<IState>) {
    this.lists$ = store.pipe(select(fromStore.getListEntitiesOrderedArray));
    this.listsSelectedId$ = store.pipe(select(fromStore.getListsSelectedId), shareReplay());
    this.tasks$ = store.pipe(select(fromStore.getTaskEntitiesOrderedArray));
  }
}
