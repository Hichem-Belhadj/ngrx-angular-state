import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialogComponent } from '../add-post-dialog/add-post-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/state/app/app.state';
import { Post } from '../../../core/models/post.model';
import { getPostById } from '../../../core/state/post/post.selector';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.scss'
})
export class UpdatePostComponent {

  @Input() postId = 0;
  post?: Post;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getPostById(this.postId)).subscribe(data => this.post = data);
  }

  editPost() {
    this.dialog.open(AddPostDialogComponent, {
      data: {id: this.postId, title: this.post?.title, description: this.post?.description, isUpdate: true},
    });
  }
}
