import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostState} from "./post.state";
import { Post } from "../../models/post.model";

const getPostState = createFeatureSelector<PostState>('posts');
export const getPosts = createSelector(getPostState, state => state.posts);

export const getPostById = (id: number) => createSelector(getPosts, (state: Post[]) => state.find(post => post.id === id));
