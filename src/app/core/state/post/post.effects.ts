import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "../../services/post.service";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from "./post.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class PostEffects {

    constructor(private actions$: Actions, private postsService: PostService) {}

    loadPosts$  = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            mergeMap(() => this.postsService.getPosts().pipe(
                map(posts => loadPostsSuccess({ posts }))
            ))
        )
    });

    addPosts$  = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap((action) => this.postsService.addPost(action.post).pipe(
                map(data => addPostSuccess({ post: { ...action.post, id: data.name } }))
            ))
        )
    });

    updatePosts$  = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            mergeMap((action) => this.postsService.updatePost(action.post).pipe(
                map(() => updatePostSuccess({ post: { ...action.post } }))
            ))
        )
    });

    deletePosts$  = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            mergeMap((action) => this.postsService.deletePost(action.id).pipe(
                map(() => deletePostSuccess({ id: action.id }))
            ))
        )
    });

}