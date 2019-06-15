import { Selector } from '@ngrx/store';
import { IListsState } from '../models';
import { IList } from '../../models';
import { ListsActions } from '../actions';
import { Utils } from '../../helpers';

const initialState: IListsState = {
  entities: {
    '1': {id: '1', name: 'Wish list', taskCount: 6},
    '2': {id: '2', name: 'Birthday party', taskCount: 10},
    '3': {id: '3', name: 'Shopping list', taskCount: 11},
    '4': {id: '4', name: 'My career', taskCount: 28}
  },
  orderedIdsArray: ['1', '3', '4', '2'],
  selectedId: '1',
  isLoading: false,
  isLoaded: false
};

export function listsReducer(state: IListsState = initialState, action: ListsActions.Actions): IListsState {
  switch (action.type) {
    case ListsActions.ActionTypes.GET_ALL_LISTS_SUCCESS:
      return {
        ...state,
        entities: Utils.toRecord<IList>(action.payload, 'id'),
        orderedIdsArray: Utils.toKeyArray<IList>(action.payload, 'id')
      };
    default:
      return state;
  }
}

export const getEntities: Selector<IListsState, Record<string, IList>> = (state: IListsState) => state.entities;
export const getOrderedIdsArray: Selector<IListsState, string[]> = (state: IListsState) => state.orderedIdsArray;
export const getSelectedId: Selector<IListsState, string> = (state: IListsState) => state.selectedId;
export const getIsLoading: Selector<IListsState, boolean> = (state: IListsState) => state.isLoading;
export const getIsLoaded: Selector<IListsState, boolean> = (state: IListsState) => state.isLoaded;
