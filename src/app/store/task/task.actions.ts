import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Tasks': emptyProps(),
    
    
  }
});
