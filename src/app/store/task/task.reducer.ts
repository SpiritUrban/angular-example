import { createReducer, on } from '@ngrx/store';
import { TaskActions } from './task.actions';

export const taskFeatureKey = 'task';

export interface State {

}

export const initialState: State = {

};

export const taskReducer = createReducer(
  initialState,
);

