import { ITask } from '../index';
import { IEntityState } from './IEntityState';

export interface ITasksState extends IEntityState<ITask> {
  isLoading: boolean;
  isLoaded: boolean;
}
