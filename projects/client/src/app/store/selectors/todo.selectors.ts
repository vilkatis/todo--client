import * as fromTodo from '../reducers/todo.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IList, IState, ITask, ITodoState } from '../../models';

const getTodoState: MemoizedSelector<IState, ITodoState> = createFeatureSelector<ITodoState>('todo');
const getTodoEntities: MemoizedSelector<IState, Record<string, IList>> = createSelector(getTodoState, fromTodo.getEntities);
export const getTodoSelectedListId: MemoizedSelector<IState, string> = createSelector(getTodoState, fromTodo.getSelectedId);
const getTodoIsLoading: MemoizedSelector<IState, boolean> = createSelector(getTodoState, fromTodo.getIsLoading);
const getTodoIsLoaded: MemoizedSelector<IState, boolean> = createSelector(getTodoState, fromTodo.getIsLoaded);
export const getTodoEntitiesOrderedArray: MemoizedSelector<IState, IList[]> = createSelector(
  getTodoEntities,
  (entities: Record<string, IList>) => {
    return Object.values(entities);
  }
);
export const getTodoSelectedTasks: MemoizedSelector<IState, ITask[]> = createSelector(
  getTodoEntities,
  getTodoSelectedListId,
  (entities: Record<string, IList>, id: string) => {
    return entities[id] && entities[id].tasks ? Object.values(entities[id].tasks) : [];
  }
);

export const getTodoSelectedListName: MemoizedSelector<IState, string> = createSelector(
  getTodoEntities,
  getTodoSelectedListId,
  (entities: Record<string, IList>, id: string) => {
    return entities[id] && entities[id].name ? entities[id].name : '';
  }
);
