import { createReducer, on } from '@ngrx/store';
import { PostActions } from './post.actions';

export const postFeatureKey = 'post';

export interface State {
  list: any[];
}

export const initialState: State = {
list: []
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.loadPosts, (state) => ({list: []})),
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    list: [...posts]
  }))
);

