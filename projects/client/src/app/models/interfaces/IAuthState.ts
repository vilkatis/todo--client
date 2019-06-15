import { IUser } from '../index';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser;
  errorMessage: string | null;
}
