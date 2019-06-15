import { Component } from '@angular/core';
import { IList } from '../models';
import { Observable } from 'rxjs';
import { IState } from '../store/models';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';


@Component({
  selector: 'core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})

export class CoreComponent {
  lists$: Observable<IList[]>;
  listsSelectedId$: Observable<string>;
  constructor(store: Store<IState>) {
    this.lists$ = store.pipe(select(fromStore.getListEntitiesOrderedArray));
    this.listsSelectedId$ = store.pipe(select(fromStore.getListsSelectedId));
  }
}
