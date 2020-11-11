import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PostsService } from '../service/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  user: any;
  userData: any = {};
  isLoading = false;
  isError = false;
  constructor(private router: Router, private apiService: PostsService) {
    if (this.router.getCurrentNavigation().extras.state?.user) {
      this.user = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.user);
      this.getuser(this.user.userId);
    } else {
      this.router.navigate(['/'], { replaceUrl: true })
    }
  }
  getuser(userId) {
    this.isLoading = true;
    this.apiService.getUser(userId).subscribe((data: {}) => {
      this.isLoading = false;
      this.userData = data;
      console.log(this.userData);
    }, (err) => {
      this.isError = true;
      this.isLoading = false;
      console.log(err);
    })
  }
  clickViewPost(id, firstName) {
    console.log(id)

    let navigationExtras: NavigationExtras = {
      state: {
        user: {
          userId: id,
          firstName: firstName
        }
      }
    }
    this.router.navigate(['post-gallery'], navigationExtras);
  }
  ngOnInit() {
  }

}
