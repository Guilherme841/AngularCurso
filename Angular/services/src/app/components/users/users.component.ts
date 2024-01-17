import { Component, OnInit } from '@angular/core';

import { searchUsers } from '../../services/users.service';
import { SearchUsersService } from '../../services/search-users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  providers: [searchUsers, SearchUsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  listUsers: Array<string> = [];
  // searchUsers!: searchUsers;
  constructor(private _SearchUsersService: SearchUsersService) {
    // this.searchUsers = new searchUsers();
    // this.searchUsers = searchUsers;
  }
  ngOnInit(): void {
    this.listUsers = this._SearchUsersService.findUsers();
  }
}
