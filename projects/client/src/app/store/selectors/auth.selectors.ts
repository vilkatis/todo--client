import * as fromAuth from '../reducers/auth.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IUser } from '../../models';
import { IAuthState, IState } from '../models';

export const getAuthState: MemoizedSelector<IState, IAuthState> = createFeatureSelector<IAuthState>('auth');
export const getIsAuthenticated: MemoizedSelector<IState, boolean> = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getUser: MemoizedSelector<IState, IUser> = createSelector(getAuthState, fromAuth.getUser);
export const getErrorMessage: MemoizedSelector<IState, string> = createSelector(getAuthState, fromAuth.getErrorMessage);
