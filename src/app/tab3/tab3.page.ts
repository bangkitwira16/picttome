import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PostsService } from '../service/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users = [];
  pages = 1;
  limit = 10;
  isLoading = false;
  isError = false;
  constructor(private apiService: PostsService, private router: Router) { }

  ionViewWillEnter() {
    this.getUser()
  }
  getUser() {
    this.isLoading = true;
    this.apiService.getUsers(this.pages, this.limit).subscribe((data: {}) => {
      this.isLoading = false;
      this.users = data['data'];
      console.log(data)
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  LoadMoreUsers(event) {
    this.pages++;
    console.log(event);
    this.apiService
      .getUsers(this.pages, this.limit)
      .subscribe(data => {
        for (const user of data['data']) {
          this.users.push(user);
        }
        event.target.complete();
        console.log(this.users);
      });
  }

  clickUserDetail(user) {
    console.log(user);
    let navigationExtras: NavigationExtras = {
      state: {
        user: {
          userId: user.id,
          firstName: user.firstName
        }
      }
    }
    this.router.navigate(['user-detail'], navigationExtras)
  }
}
