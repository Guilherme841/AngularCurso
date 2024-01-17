import { Component, OnInit } from '@angular/core';

import { searchUsers } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  listUsers: Array<string> = [];
  searchUsers!: searchUsers;
  constructor() {
    this.searchUsers = new searchUsers();
  }
  ngOnInit(): void {
    this.listUsers = this.searchUsers.getUsers();
  }
  users: Array<string> = [];
}
