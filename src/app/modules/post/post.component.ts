import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Post} from "../../core/models/post.model";
import {getPosts} from "../../core/state/post/post.selector";
import {AppState} from "../../core/state/app/app.state";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  posts$ = new Observable<Post[]>();
  displayedColumns: string[] = ['id', 'title', 'description', 'action'];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }
}
