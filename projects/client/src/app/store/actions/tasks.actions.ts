import { Action } from '@ngrx/store';
import { ITask } from '../../models';

export enum ActionTypes {
  GET_ALL_TASKS_REQUEST = '[Tasks] Get all lists request',
  GET_ALL_TASKS_SUCCESS = '[Tasks] Get all lists success',
  GET_ALL_TASKS_FAILURE = '[Tasks] Get all lists failure',
  ADD_NEW_TASK_REQUEST = '[Tasks] Add new list request',
  ADD_NEW_TASK_SUCCESS = '[Tasks] Add new list success',
  ADD_NEW_TASK_FAILURE = '[Tasks] Add new list failure',
}

export class GetAllTasksRequest implements Action {
  readonly type = ActionTypes.GET_ALL_TASKS_REQUEST;

  constructor(public payload: string) {
  }
}

export class GetAllTasksSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_TASKS_SUCCESS;

  constructor(public payload: ITask[]) {
  }
}

export class GetAllTasksFailure implements Action {
  readonly type = ActionTypes.GET_ALL_TASKS_FAILURE;

  constructor(public payload: Error) {
  }
}

export class AddNewTaskRequest implements Action {
  readonly type = ActionTypes.ADD_NEW_TASK_REQUEST;

  constructor(public payload: Pick<ITask, 'name'>) {
  }
}

export class AddNewTaskSuccess implements Action {
  readonly type = ActionTypes.ADD_NEW_TASK_SUCCESS;

  constructor(public payload: ITask) {
  }
}

export class AddNewTaskFailure implements Action {
  readonly type = ActionTypes.ADD_NEW_TASK_FAILURE;

  constructor(public payload: Error) {
  }
}

export type Actions =
  | GetAllTasksRequest
  | GetAllTasksSuccess
  | GetAllTasksFailure
  | AddNewTaskRequest
  | AddNewTaskSuccess
  | AddNewTaskFailure;
