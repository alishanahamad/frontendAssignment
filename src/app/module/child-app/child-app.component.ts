import { Component, OnInit } from '@angular/core';

import { UserListService } from '../../services/user-list.service';
import { userDetail } from '../../shared/user-detail-model';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.scss']
})
export class ChildAppComponent implements OnInit {

  constructor(private userListService: UserListService,
              private utilService: UtilService) { }

  userLists: userDetail[];

  ngOnInit() {
    this.getUserLists();
    this.utilService.GetUserDetails().subscribe(userDetail => {
      if (userDetail) {
        this.userLists.push(userDetail);
        this.utilService.addUserDetail.next(null);
      }
    });
  }

  getUserLists() {
    this.userListService.getUserDetails()
      .then(response => {
        this.userLists = response;
        this.userLists.forEach(user => user.editFlag = false);
      })
      .catch(err => console.log(err));
  }

  deletUser(user) {
    if (!confirm(`Are you sure you want to delete: ${user.name}`)) {
      return;
    }
    this.userListService.deleteUserDetail(user._id)
      .then(response => {
        this.getUserLists();
      })
      .catch(err => console.log(err));
  }

  editUserDetail(userDetail) {
    const requestbody = {
      name: userDetail.name,
      email: userDetail.email,
      contact: userDetail.contact,
      password: userDetail.password
    };
    this.userListService.updateUserDetail(userDetail._id, requestbody)
      .then(response => {
      })
      .catch(err => {
        alert('please enter the correct value');
        this.getUserLists();
      });
  }

}
