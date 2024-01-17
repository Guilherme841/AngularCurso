import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchUsersService {
  constructor() {}
  findUsers() {
    return ['User', 'User', 'User', 'User'];
  }
}
