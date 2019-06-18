import { ActionReducerMap } from '@ngrx/store';
import { IState } from '../../models';
import { authReducer } from './auth.reducer';
import { todoReducer } from './todo.reducer';

export const reducers: ActionReducerMap<IState> = {
  auth: authReducer,
  todo: todoReducer,
};
