import { Selector } from '@ngrx/store';
import { ITask, ITasksState } from '../../models';
import { TasksActions } from '../actions';

const initialState: ITasksState = {
  entities: {
    '1': {id: '1', name: 'Buy Maserati Quattroporte S - Black', isCompleted: false},
    '2': {id: '2', name: 'Buy Apple Mackbook Pro Retina 15', isCompleted: true},
    '3': {id: '3', name: 'Buy house on Sri Lanka', isCompleted: false},
    '4': {id: '4', name: 'Buy new glamorous clothes', isCompleted: false},
    '5': {id: '5', name: 'Buy sunglasses', isCompleted: false},
    '6': {id: '6', name: 'Buy chocolate for my friend Kathy', isCompleted: true},
    '7': {id: '7', name: 'Buy trip to Tokyo', isCompleted: false},
    '8': {id: '8', name: 'Buy new iPad', isCompleted: false},
    '9': {id: '9', name: 'Buy flowers for my mother', isCompleted: false},
    '10': {id: '10', name: 'Buy a lot of apples in Tesco shoppinghouse', isCompleted: false},
    '11': {id: '11', name: 'Buy Smashing Book', isCompleted: false},
  },
  ids: ['1', '3', '4', '5', '2', '7', '6', '8', '10', '11', '9'],
  isLoading: false,
  isLoaded: false
};

export function tasksReducer(state: ITasksState = initialState, action: TasksActions.Actions): ITasksState {
  switch (action.type) {
    default:
      return state;
  }
}

export const getEntities: Selector<ITasksState, Record<string, ITask>> = (state: ITasksState) => state.entities;
export const getIds: Selector<ITasksState, string[]> = (state: ITasksState) => state.ids;
export const getIsLoading: Selector<ITasksState, boolean> = (state: ITasksState) => state.isLoading;
export const getIsLoaded: Selector<ITasksState, boolean> = (state: ITasksState) => state.isLoaded;
