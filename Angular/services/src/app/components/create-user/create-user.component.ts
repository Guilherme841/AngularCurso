import { Component, OnInit } from '@angular/core';

import { SearchUsersService } from './../../services/search-users.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  providers: [SearchUsersService],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  listUsers: Array<string> = [];
  constructor(private _searchUsersService: SearchUsersService) {}
  ngOnInit(): void {
    this.listUsers = this._searchUsersService.findUsers();
  }
  createUser(user: string) {
    this._searchUsersService.logService.consoleLog(`Novo Usuário Criado: ${user}`);
    this.listUsers.push(user);
    this._searchUsersService.serviceEvent.emit(user);
    SearchUsersService.createUser.emit(user);
  }
}
