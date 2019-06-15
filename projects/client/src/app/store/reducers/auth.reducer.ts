import { IAuthState } from '../models';
import { AuthActions } from '../actions';
import { Selector } from '@ngrx/store';
import { IUser } from '../../models';

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function authReducer(state: IAuthState = initialState, action: AuthActions.Actions): IAuthState {
  switch (action.type) {
    case AuthActions.ActionTypes.LOGIN_SUCCESS:
    case AuthActions.ActionTypes.REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    case AuthActions.ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export const getIsAuthenticated: Selector<IAuthState, boolean> = (state: IAuthState) => state.isAuthenticated;
export const getUser: Selector<IAuthState, IUser> = (state: IAuthState) => state.user;
export const getErrorMessage: Selector<IAuthState, string> = (state: IAuthState) => state.errorMessage;
