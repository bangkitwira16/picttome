import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { single } from 'rxjs/operators';
import { PostsService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  postId: any;
  post: any = {};
  isLoading = false;
  isError = false;
  constructor(private router: Router, private apiService: PostsService) {
    if (this.router.getCurrentNavigation().extras.state?.postId) {
      this.postId = this.router.getCurrentNavigation().extras.state.postId;
      this.getPost(this.postId);
    } else {
      this.router.navigate(['/'], {replaceUrl: true})
    }
  }
  getPost(postId) {
    this.isLoading = true;
    this.apiService.getPost(postId).subscribe((data: {}) => {
      this.isLoading = false;
      this.post = data;
      console.log(this.post);
    }, (err) => {
      this.isLoading = false;
      this.isError = true
    })
  }
  viewComments(postId) {
    console.log(postId);
    let navigationExtras: NavigationExtras = {
      state: {
        postId: postId
      }
    }
    this.router.navigate(['view-comments'], navigationExtras);
  }
  ngOnInit() {
  }

}
