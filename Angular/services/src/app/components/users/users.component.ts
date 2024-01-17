import { Component, OnInit } from '@angular/core';

import { searchUsers } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  providers: [searchUsers],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  listUsers: Array<string> = [];
  searchUsers!: searchUsers;
  constructor(searchUsers: searchUsers) {
    // this.searchUsers = new searchUsers();
    this.searchUsers = searchUsers;
  }
  ngOnInit(): void {
    this.listUsers = this.searchUsers.getUsers();
  }
  users: Array<string> = []; 
}
