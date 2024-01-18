import { Component, EventEmitter, OnInit } from '@angular/core';

import { SearchUsersService } from '../../services/search-users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  providers: [SearchUsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  listUsers: Array<string> = [];
  constructor(private _searchUsersService: SearchUsersService) {}
  ngOnInit(): void {
    this.listUsers = this._searchUsersService.findUsers();
    SearchUsersService.createUser.subscribe((user) =>
      this.listUsers.push(user)
    );
  }
}
