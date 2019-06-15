import * as fromTasks from '../reducers/tasks.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IState, ITask, ITasksState } from '../../models';

const getTasksState: MemoizedSelector<IState, ITasksState> = createFeatureSelector<ITasksState>('tasks');
const getTaskEntities: MemoizedSelector<IState, Record<string, ITask>> = createSelector(getTasksState, fromTasks.getEntities);
const geTaskIds: MemoizedSelector<IState, string[]> = createSelector(getTasksState, fromTasks.getIds);
const getTasksIsLoading: MemoizedSelector<IState, boolean> = createSelector(getTasksState, fromTasks.getIsLoading);
const getTasksIsLoaded: MemoizedSelector<IState, boolean> = createSelector(getTasksState, fromTasks.getIsLoaded);
export const getTaskEntitiesOrderedArray: MemoizedSelector<IState, ITask[]> = createSelector(
  getTaskEntities,
  geTaskIds,
  (entities: Record<string, ITask>, ids: string[]) => {
    return ids.map((id: string) => entities[id]);
  }
);
