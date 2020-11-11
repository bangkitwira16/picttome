import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../service/api.service';

@Component({
  selector: 'app-post-gallery',
  templateUrl: './post-gallery.page.html',
  styleUrls: ['./post-gallery.page.scss'],
})
export class PostGalleryPage implements OnInit {

  isLoading = false;
  isError = false;
  firstName: string;
  user: any;
  posts = [];
  constructor(private router: Router, private apiService: PostsService) {
    if (this.router.getCurrentNavigation().extras.state?.user) {
      this.user = this.router.getCurrentNavigation().extras.state.user
      this.firstName = this.user.firstName;
      this.getPostByUser(this.user.userId)
    } else {
      this.router.navigate(['/'], {replaceUrl: true})
    }
  }

  getPostByUser(userId) {
    this.isLoading = true
    this.apiService.getPostByUser(userId).subscribe((data: {}) => {
      this.isLoading = false;
      this.posts = data['data'];
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  ngOnInit() {
  }

}
