import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PostsService } from '../service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 400,
    centeredSlides: false,
  };

  tags= [];
  isAllPost = true;
  postsAll = [];
  posts= [];
  pages=1;
  limit=12;
  isLoading = false;
  isError = false;
  constructor(private apiService: PostsService, private router: Router) { }
  
  ionViewWillEnter() {
    this.getTags();
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true
    this.apiService.getPosts(this.pages, this.limit).subscribe((data: {}) => {
      this.isLoading = false;
      this.postsAll = data['data'];
      console.log(this.postsAll);
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  getTags() {
    this.apiService.getTags().subscribe((data: {}) => {
      this.tags = data['data'];
      console.log(this.tags);
    })
  }

  getPostByTag(value) {
    this.isLoading = true;
    this.apiService.getPostbyTags(value).subscribe((data: {}) => {
      this.isLoading = false;
      this.posts = data['data'];
    })
  }

  clickByTag(tag) {
    this.isAllPost = false;
    this.getPostByTag(tag);
  }

  clickPostDetail(post) {
    let navigationExtras: NavigationExtras = {
      state: {
        postId: post.id
      }
    }
    this.router.navigate(['postDetails'], navigationExtras)
  }
}
