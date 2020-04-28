import { Component, OnInit } from '@angular/core';
import {TokenStorageService, UserService} from '../../servives';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  isLogin = false;
  currentUserName = ''
  constructor( private storageService :TokenStorageService,
    private userService: UserService) { }

  ngOnInit() {
    let currentUser = this.storageService.getCurrentUser();
    if (currentUser) {
      this.isLogin = true;
      this.userService.getUser(currentUser.username).subscribe(data=>{
        this.currentUserName = data.displayName;
      });
    }
  }
  logout() {
    this.storageService.signOut();
    this.isLogin = false;
    this.currentUserName = '';
  }

}
