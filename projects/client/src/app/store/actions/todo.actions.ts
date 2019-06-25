import { Action } from '@ngrx/store';
import { IList, ITask } from '../../models';

export enum ActionTypes {
  GET_ALL_LISTS_REQUEST = '[Todo] Get all lists request',
  GET_ALL_LISTS_SUCCESS = '[Todo] Get all lists success',
  GET_ALL_LISTS_FAILURE = '[Todo] Get all lists failure',
  ADD_NEW_LIST_REQUEST = '[Todo] Add new list request',
  ADD_NEW_LIST_SUCCESS = '[Todo] Add new list success',
  ADD_NEW_LIST_FAILURE = '[Todo] Add new list failure',
  SELECT_LIST = '[Todo] Select list',
  ADD_TASK_REQUEST = '[Todo] Add task request',
  ADD_TASK_SUCCESS = '[Todo] Add task success',
  ADD_TASK_FAILURE = '[Todo] Add task failure',
  UPDATE_TASK_REQUEST = '[Todo] Update task request',
  UPDATE_TASK_SUCCESS = '[Todo] Update task success',
  UPDATE_TASK_FAILURE = '[Todo] Update task failure',
  DELETE_TASK_REQUEST = '[Todo] Delete task request',
  DELETE_TASK_SUCCESS = '[Todo] Delete task success',
  DELETE_TASK_FAILURE = '[Todo] Delete task failure',
  REMOVE_COMPLETED_TASKS_REQUEST = '[Todo] Remove completed tasks request',
  REMOVE_COMPLETED_TASKS_SUCCESS = '[Todo] Remove completed tasks success',
  REMOVE_COMPLETED_TASKS_FAILURE = '[Todo] Remove completed tasks failure',
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

  constructor(public payload: string) {
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

export class AddTaskRequest implements Action {
  readonly type = ActionTypes.ADD_TASK_REQUEST;

  constructor(public payload: {listId: string, taskName: string}) {
  }
}

export class AddTaskSuccess implements Action {
  readonly type = ActionTypes.ADD_TASK_SUCCESS;

  constructor(public payload: {listId: string, task: ITask}) {
  }
}

export class AddTaskFailure implements Action {
  readonly type = ActionTypes.ADD_TASK_FAILURE;

  constructor(public payload: Error) {
  }
}

export class UpdateTaskRequest implements Action {
  readonly type = ActionTypes.UPDATE_TASK_REQUEST;

  constructor(public payload: {listId: string, task: ITask}) {
  }
}

export class UpdateTaskSuccess implements Action {
  readonly type = ActionTypes.UPDATE_TASK_SUCCESS;

  constructor(public payload: {listId: string, task: ITask}) {
  }
}

export class UpdateTaskFailure implements Action {
  readonly type = ActionTypes.UPDATE_TASK_FAILURE;

  constructor(public payload: Error) {
  }
}

export class DeleteTaskRequest implements Action {
  readonly type = ActionTypes.DELETE_TASK_REQUEST;

  constructor(public payload: {listId: string, taskId: string}) {
  }
}

export class DeleteTaskSuccess implements Action {
  readonly type = ActionTypes.DELETE_TASK_SUCCESS;

  constructor(public payload: {listId: string, taskId: string}) {
  }
}

export class DeleteTaskFailure implements Action {
  readonly type = ActionTypes.DELETE_TASK_FAILURE;

  constructor(public payload: Error) {
  }
}

export class RemoveCompletedTasksRequest implements Action {
  readonly type = ActionTypes.REMOVE_COMPLETED_TASKS_REQUEST;

  constructor(public payload: string) {
  }
}

export class RemoveCompletedTasksSuccess implements Action {
  readonly type = ActionTypes.REMOVE_COMPLETED_TASKS_SUCCESS;

  constructor(public payload: {listId: string, taskIds: string[]}) {
  }
}

export class RemoveCompletedTasksFailure implements Action {
  readonly type = ActionTypes.REMOVE_COMPLETED_TASKS_FAILURE;

  constructor(public payload: Error) {
  }
}

export type Actions =
  | GetAllListsRequest
  | GetAllListsSuccess
  | GetAllListsFailure
  | AddNewListRequest
  | AddNewListSuccess
  | AddNewListFailure
  | SelectList
  | AddTaskRequest
  | AddTaskSuccess
  | AddTaskFailure
  | UpdateTaskRequest
  | UpdateTaskSuccess
  | UpdateTaskFailure
  | DeleteTaskRequest
  | DeleteTaskSuccess
  | DeleteTaskFailure
  | RemoveCompletedTasksRequest
  | RemoveCompletedTasksSuccess
  | RemoveCompletedTasksFailure;
