import { Component } from '@angular/core';

import { SearchUsersService } from './../../services/search-users.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  providers: [SearchUsersService],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  constructor(private _searchUsersService: SearchUsersService) {
    console.log(this._searchUsersService.findUsers());
  }
}
