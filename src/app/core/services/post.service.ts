import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://angular-state-f3cd2-default-rtdb.europe-west1.firebasedatabase.app/posts.json').pipe(
      map((data: any) => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({...data[key], id: key});
        }
        return posts;
      })
    );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>('https://angular-state-f3cd2-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post);
  }

  updatePost(post: Post) {
    const id = post.id ?? '';
    const postData = { [id]: { title: post.title, description: post.description } };
    return this.http.patch('https://angular-state-f3cd2-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData);
  }

  deletePost(id: string) {
    return this.http.delete(`https://angular-state-f3cd2-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
  }
}
