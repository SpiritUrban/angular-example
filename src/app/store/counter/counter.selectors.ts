import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

const selectCounter = (state: AppState) => state.counter;

export const selectCounterValue = createSelector(
  selectCounter,
  (counter) => counter.value
);
