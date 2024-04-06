import { createReducer, on } from '@ngrx/store';
import { TaskActions } from './task.actions';

export const taskFeatureKey = 'task';

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface State {
  list: Task[];
}

export const initialState: State = {
  list: [],
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { name }) => ({
    ...state,
    list: [...state.list, { id: Math.random().toString(), name, completed: false }],
  }))
);

