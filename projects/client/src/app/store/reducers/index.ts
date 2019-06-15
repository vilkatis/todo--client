import { ActionReducerMap } from '@ngrx/store';
import { IState } from '../../models';
import { authReducer } from './auth.reducer';
import { listsReducer } from './lists.reducer';
import { tasksReducer } from './tasks.reducer';

export const reducers: ActionReducerMap<IState> = {
  auth: authReducer,
  lists: listsReducer,
  tasks: tasksReducer
};
