import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Load Counters': emptyProps(),

    'Increment': emptyProps(),
    'Decrement': emptyProps(),
  }
});

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
