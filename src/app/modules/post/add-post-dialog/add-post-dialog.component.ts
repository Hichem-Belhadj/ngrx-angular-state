import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../add-post/add-post.component";
import {FormBuilder} from "@angular/forms";
import {Post} from "../../../core/models/post.model";
import {Store} from "@ngrx/store";
import {addPost, updatePost} from "../../../core/state/post/post.actions";
import {AppState} from "../../../core/state/app/app.state";

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrl: './add-post-dialog.component.scss'
})
export class AddPostDialogComponent {
  public post = this.formBuilder.group({
    title: [''],
    description: [''],
  });
  isUpdate = false;
  constructor(
    public dialogRef: MatDialogRef<AddPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.isUpdate = !!this.data?.isUpdate;
    this.formFilling();
  }

  add(): void {
    if (!this.post.value.title || !this.post.value.description) return;
    const post: Post = {
      title: this.post.value.title,
      description: this.post.value.description,
    }

    if (this.isUpdate) {
      post.id = this.data.id;
      this.store.dispatch(updatePost({ post }));
    } else {
      this.store.dispatch(addPost({ post }));
    }
    this.dialogRef.close();
  }

  formFilling() {
    if (this.data?.title && this.data?.description) {
      this.post.patchValue({
        title: this.data.title,
        description: this.data.description,
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
