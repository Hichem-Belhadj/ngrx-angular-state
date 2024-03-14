import {CounterState} from "../counter/counter.state";
import {PostState} from "../post/post.state";
import {counterReducer} from "../counter/counter.reducer";
import {postsReducer} from "../post/post.reducer";
import { AuthState } from "../auth/auth.state";
import { authReducer } from "../auth/auth.reducer";

export interface  AppState {
  counter: CounterState;
  posts: PostState;
  auth: AuthState
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
  auth: authReducer
}
