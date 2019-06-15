import { IAuthState } from './IAuthState';
import { IListsState } from './IListsState';
import { ITasksState } from './ITasksState';

export interface IState {
  auth: IAuthState;
  lists: IListsState;
  tasks: ITasksState;
}
