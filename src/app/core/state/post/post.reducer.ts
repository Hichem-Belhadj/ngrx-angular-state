import { createReducer, Action, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from "./post.actions";

const _postsReducer = createReducer(initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post }
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePostSuccess, (state, action) => {
    const updatedPosts = state.posts.map(post => action.post.id === post.id ? action.post : post);
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePostSuccess, (state, action) => {
    const updatedPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(loadPostsSuccess, (state, action) => {
    console.log(action.posts)
    return {
      ...state,
      posts: action.posts
    }
  })
);

export function postsReducer(state: any, action: Action) {
  return _postsReducer(state, action);
}
