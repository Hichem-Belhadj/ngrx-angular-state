import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/state/app/app.state';
import { getPostById } from '../../../core/state/post/post.selector';
import { deletePost } from '../../../core/state/post/post.actions';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.scss'
})
export class DeletePostComponent {

  @Input() postId = 0;
  post?: Post;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getPostById(this.postId)).subscribe(data => this.post = data);
  }

  deletePost() {
    if (confirm('Are you sure you want to delete ?')) {
      this.store.dispatch(deletePost({ id: this.postId }));
    }
  }

}
