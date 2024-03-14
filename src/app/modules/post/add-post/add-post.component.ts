import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPostDialogComponent} from "../add-post-dialog/add-post-dialog.component";

export interface DialogData {
  id?: number;
  title: string;
  description: string;
  isUpdate?: boolean;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {

  constructor(public dialog: MatDialog) {}

  addPost() {
    this.dialog.open(AddPostDialogComponent);
  }
}
