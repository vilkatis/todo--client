import { Selector } from '@ngrx/store';
import { IList, ITask, ITodoState } from '../../models';
import { Utils } from '../../helpers';
import { TodoActions } from '../actions';

const initialState: ITodoState = {
  entities: {},
  selectedId: null,
  isLoading: false,
  isLoaded: false
};

export function todoReducer(state: ITodoState = initialState, action: TodoActions.Actions): ITodoState {
  switch (action.type) {
    case TodoActions.ActionTypes.GET_ALL_LISTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TodoActions.ActionTypes.GET_ALL_LISTS_SUCCESS:
      return {
        ...state,
        entities: Utils.toRecord<IList>(action.payload, 'id'),
        isLoading: false,
        isLoaded: true
      };
    case TodoActions.ActionTypes.GET_ALL_LISTS_FAILURE:
      return initialState;
    case TodoActions.ActionTypes.SELECT_LIST:
      return {
        ...state,
        selectedId: action.payload
      };
    case TodoActions.ActionTypes.ADD_NEW_LIST_SUCCESS: {
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        }
      };
    }
    case TodoActions.ActionTypes.ADD_TASK_SUCCESS: {
      const {listId, task} = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [listId]: {
            ...state.entities[listId],
            count: state.entities[listId].count + 1,
            tasks: {
              ...state.entities[listId].tasks,
              [task.id]: task
            }
          }
        }
      };
    }
    case TodoActions.ActionTypes.UPDATE_TASK_SUCCESS: {
      const {listId, task} = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [listId]: {
            ...state.entities[listId],
            tasks: {
              ...state.entities[listId].tasks,
              [task.id]: {
                ...state.entities[listId].tasks[task.id],
                ...task
              }
            }
          }
        }
      };
    }
    case TodoActions.ActionTypes.DELETE_TASK_SUCCESS: {
      const {listId, taskId} = action.payload;
      const {[taskId]: value, ...updatedTasks} = state.entities[listId].tasks;
      return {
        ...state,
        entities: {
          ...state.entities,
          [listId]: {
            ...state.entities[listId],
            count: state.entities[listId].count - 1,
            tasks: updatedTasks
          }
        }
      };
    }
    case TodoActions.ActionTypes.REMOVE_COMPLETED_TASKS_SUCCESS: {
      const {listId, taskIds} = action.payload;
      const tasks: Record<string, ITask> = state.entities[listId].tasks;
      const updatedTasks: Record<string, ITask> = Object.keys(tasks).reduce((dictionary: Record<string, ITask>, keyName: string) => {
        if (taskIds.indexOf(keyName) === -1) dictionary[keyName] = tasks[keyName];
        return dictionary;
      }, {});
      return {
        ...state,
        entities: {
          ...state.entities,
          [listId]: {
            ...state.entities[listId],
            count: state.entities[listId].count - taskIds.length,
            tasks: updatedTasks
          }
        }
      };
    }
    default:
      return state;
  }
}

export const getEntities: Selector<ITodoState, Record<string, IList>> = (state: ITodoState) => state.entities;
export const getSelectedId: Selector<ITodoState, string> = (state: ITodoState) => state.selectedId;
export const getIsLoading: Selector<ITodoState, boolean> = (state: ITodoState) => state.isLoading;
export const getIsLoaded: Selector<ITodoState, boolean> = (state: ITodoState) => state.isLoaded;
