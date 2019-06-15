import { IAuthState } from './IAuthState';
import { IListsState } from './IListsState';

export interface IState {
  auth: IAuthState;
  lists: IListsState;
}
