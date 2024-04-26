import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';
import { CounterState } from './counter.interface';

export const counterFeatureKey = 'counter';

export const initialState: CounterState = {
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
