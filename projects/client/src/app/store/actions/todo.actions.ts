import { Action } from '@ngrx/store';
import { IList } from '../../models';

export enum ActionTypes {
  GET_ALL_LISTS_REQUEST = '[Lists] Get all lists request',
  GET_ALL_LISTS_SUCCESS = '[Lists] Get all lists success',
  GET_ALL_LISTS_FAILURE = '[Lists] Get all lists failure',
  ADD_NEW_LIST_REQUEST = '[Lists] Add new list request',
  ADD_NEW_LIST_SUCCESS = '[Lists] Add new list success',
  ADD_NEW_LIST_FAILURE = '[Lists] Add new list failure',
  SELECT_LIST = '[Lists] Select list',
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

export class AddNewListRequest implements Action {
  readonly type = ActionTypes.ADD_NEW_LIST_REQUEST;

  constructor(public payload: Pick<IList, 'name'>) {
  }
}

export class AddNewListSuccess implements Action {
  readonly type = ActionTypes.ADD_NEW_LIST_SUCCESS;

  constructor(public payload: IList) {
  }
}

export class AddNewListFailure implements Action {
  readonly type = ActionTypes.ADD_NEW_LIST_FAILURE;

  constructor(public payload: Error) {
  }
}

export class SelectList implements Action {
  readonly type = ActionTypes.SELECT_LIST;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllListsRequest
  | GetAllListsSuccess
  | GetAllListsFailure
  | AddNewListRequest
  | AddNewListSuccess
  | AddNewListFailure
  | SelectList;
