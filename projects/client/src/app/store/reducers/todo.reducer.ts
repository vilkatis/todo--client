import { Selector } from '@ngrx/store';
import { IList, ITodoState } from '../../models';
import { Utils } from '../../helpers';
import { TodoActions } from '../actions';

const initialState: ITodoState = {
  entities: {},
  selectedId: null,
  isLoading: false,
  isLoaded: false
};

export function todoReducer(state: ITodoState = initialState, action: TodoActions.Actions): ITodoState {
  switch (action.type) {
    case TodoActions.ActionTypes.GET_ALL_LISTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TodoActions.ActionTypes.GET_ALL_LISTS_SUCCESS:
      return {
        ...state,
        entities: Utils.toRecord<IList>(action.payload, 'id'),
        isLoading: false,
        isLoaded: true
      };
    case TodoActions.ActionTypes.GET_ALL_LISTS_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export const getEntities: Selector<ITodoState, Record<string, IList>> = (state: ITodoState) => state.entities;
export const getSelectedId: Selector<ITodoState, string> = (state: ITodoState) => state.selectedId;
export const getIsLoading: Selector<ITodoState, boolean> = (state: ITodoState) => state.isLoading;
export const getIsLoaded: Selector<ITodoState, boolean> = (state: ITodoState) => state.isLoaded;
