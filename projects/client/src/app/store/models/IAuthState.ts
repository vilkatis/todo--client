import { IUser } from '../../models';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser;
  errorMessage: string | null;
}
