import { IAuthState } from './IAuthState';
import { ITodoState } from './ITodoState';

export interface IState {
  auth: IAuthState;
  todo: ITodoState;
}
