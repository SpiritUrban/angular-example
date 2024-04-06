import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Tasks': emptyProps(),
    'Add Task': props<{ name: string }>(),
    'Update Task': props<{ id: string, name: string }>(),
    'Delete Task': props<{ id: string }>(),
    'Toggle Task': props<{ id: string }>(),
  }
});
