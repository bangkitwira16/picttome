import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../service/api.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.page.html',
  styleUrls: ['./view-comments.page.scss'],
})
export class ViewCommentsPage implements OnInit {

  comments = [];
  postId: any;
  isLoading = false;
  isError = false;
  constructor( private router: Router, private apiService: PostsService) {
    console.log('initcon')
    if (this.router.getCurrentNavigation().extras.state?.postId) {
      this.postId = this.router.getCurrentNavigation().extras.state.postId
      this.getComments(this.postId);
    } else {
      this.router.navigate(['/'], {replaceUrl: true});
    }
    // this.route.queryParams.subscribe((params) => {
    //   console.log(this.router.getCurrentNavigation().extras.state?.postId);
    //   if (this.router.getCurrentNavigation().extras.state.postId) {
    //     this.postId = this.router.getCurrentNavigation().extras.state.postId
    //     this.getComments(this.postId);
    //   } else {
    //     this.router.navigate(['/']);
    //   }
    // })
  }

  getComments(postId) {
    this.isLoading = true
    this.apiService.getPostComment(postId).subscribe((data: {}) => {
      this.isLoading = false;
      this.comments = data['data'];
      console.log(data);
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  ngOnInit() {
    console.log('initinit')

  }

}
