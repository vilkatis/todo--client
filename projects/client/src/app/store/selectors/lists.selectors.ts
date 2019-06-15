import * as fromLists from '../reducers/lists.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IList, IListsState, IState } from '../../models';

const getListsState: MemoizedSelector<IState, IListsState> = createFeatureSelector<IListsState>('lists');
const getListEntities: MemoizedSelector<IState, Record<string, IList>> = createSelector(getListsState, fromLists.getEntities);
const getListIds: MemoizedSelector<IState, string[]> = createSelector(getListsState, fromLists.getIds);
export const getListsSelectedId: MemoizedSelector<IState, string> = createSelector(getListsState, fromLists.getSelectedId);
const getListsIsLoading: MemoizedSelector<IState, boolean> = createSelector(getListsState, fromLists.getIsLoading);
const getListsIsLoaded: MemoizedSelector<IState, boolean> = createSelector(getListsState, fromLists.getIsLoaded);
export const getListEntitiesOrderedArray: MemoizedSelector<IState, IList[]> = createSelector(
  getListEntities,
  getListIds,
  (entities: Record<string, IList>, ids: string[]) => {
    return ids.map((id: string) => entities[id]);
  }
);
