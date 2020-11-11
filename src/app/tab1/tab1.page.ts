import { Component } from '@angular/core';
import { PostsService } from "../service/api.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts= [];
  pages = 1;
  limit = 5;
  isLoading = false;
  isError = false;
  constructor(private postService: PostsService) {
   }
  
  ionViewWillEnter() {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    return this.postService.getPosts(this.pages, this.limit).subscribe((data: {}) => {
      this.isLoading = false;
      this.posts = data['data'];
      console.log(data);
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
      console.log(err);
    })
  }

  LoadMoreNews(event){
    this.pages++;
    console.log(event);
    this.postService
    .getPosts(this.pages, this.limit)
    .subscribe(data =>{
      for(const post of data['data']){
        this.posts.push(post);
      }
      event.target.complete();
      console.log(this.posts);
    });
  }

}
