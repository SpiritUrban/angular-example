import { createReducer, on } from '@ngrx/store';
import { CounterActions } from '../counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    value: state.value + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    value: state.value - 1,
  }))
);
