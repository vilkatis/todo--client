import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum ActionTypes {
  LOGIN_REQUEST = '[Auth] Login request',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',
  REGISTER_REQUEST = '[Auth] Register request',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',
  LOGOUT = '[Auth] Logout',
}

export class LoginRequest implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;

  constructor(public payload: IUser) {
  }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: IUser) {
  }
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: Error) {
  }
}

export class RegisterRequest implements Action {
  readonly type = ActionTypes.REGISTER_REQUEST;

  constructor(public payload: IUser) {
  }
}

export class RegisterSuccess implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;

  constructor(public payload: IUser) {
  }
}

export class RegisterFailure implements Action {
  readonly type = ActionTypes.REGISTER_FAILURE;

  constructor(public payload: Error) {
  }
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export type Actions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | RegisterRequest
  | RegisterSuccess
  | RegisterFailure
  | Logout;
