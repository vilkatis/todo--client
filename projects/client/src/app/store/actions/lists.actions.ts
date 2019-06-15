import { Action } from '@ngrx/store';
import { IList } from '../../models';

export enum ActionTypes {
  GET_ALL_LISTS_REQUEST = '[Lists] Get all lists request',
  GET_ALL_LISTS_SUCCESS = '[Lists] Get all lists success',
  GET_ALL_LISTS_FAILURE = '[Lists] Get all lists failure'
}

export class GetAllListsRequest implements Action {
  readonly type = ActionTypes.GET_ALL_LISTS_REQUEST;
}

export class GetAllListsSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_LISTS_SUCCESS;

  constructor(public payload: IList[]) {
  }
}

export class GetAllListsFailure implements Action {
  readonly type = ActionTypes.GET_ALL_LISTS_FAILURE;

  constructor(public payload: Error) {
  }
}

export type Actions =
  | GetAllListsRequest
  | GetAllListsSuccess
  | GetAllListsFailure;
