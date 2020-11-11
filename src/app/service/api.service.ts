import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { URL, APPID } from "../config/config";
import { Post } from '../model/post';
import { retry, catchError } from "rxjs/operators";
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'app-id': `${APPID}`
    })
  }
  getUsers(pages, limit): Observable<User> {
    return this.http.get<User>(`${URL}user?page=${pages}&limit=${limit}`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getUser(userId): Observable<User> {
    return this.http.get<User>(`${URL}user/${userId}`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getPosts(pages, limit): Observable<Post> {
    return this.http.get<Post>(`${URL}post?page=${pages}&limit=${limit}`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getPost(postId): Observable<Post> {
    return this.http.get<Post>(`${URL}post/${postId}`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getPostByUser(userId): Observable<Post> {
    return this.http.get<Post>(`${URL}user/${userId}/post`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getTags() { 
    return this.http.get(`${URL}tag?limit=10`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getPostbyTags(tags): Observable<Post> {
    return this.http.get<Post>(`${URL}tag/${tags}/post?limit=12`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getPostComment(postId): Observable<Comment> {
    return this.http.get<Comment>(`${URL}post/${postId}/comment`, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
