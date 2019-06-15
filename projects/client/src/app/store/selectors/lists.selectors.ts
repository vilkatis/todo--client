import * as fromLists from '../reducers/lists.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IList } from '../../models';
import { IListsState, IState } from '../models';

const getListsState: MemoizedSelector<IState, IListsState> = createFeatureSelector<IListsState>('lists');
const getListEntities: MemoizedSelector<IState, Record<string, IList>> = createSelector(getListsState, fromLists.getEntities);
const getListsOrderedIdsArray: MemoizedSelector<IState, string[]> = createSelector(getListsState, fromLists.getOrderedIdsArray);
export const getListsSelectedId: MemoizedSelector<IState, string> = createSelector(getListsState, fromLists.getSelectedId);
const getListsIsLoading: MemoizedSelector<IState, boolean> = createSelector(getListsState, fromLists.getIsLoading);
const getListsIsLoaded: MemoizedSelector<IState, boolean> = createSelector(getListsState, fromLists.getIsLoaded);
export const getListEntitiesOrderedArray: MemoizedSelector<IState, IList[]> = createSelector(
  getListEntities,
  getListsOrderedIdsArray,
  (entities: Record<string, IList>, orderedIdsArray: string[]) => {
    return orderedIdsArray.map((id: string) => entities[id]);
  }
);
