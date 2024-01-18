import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class SearchUsersService {
  serviceEvent = new EventEmitter();
  static createUser = new EventEmitter();
  private _users: Array<string> = ['User', 'User', 'User', 'User'];
  constructor(public logService: LogService) {}
  callPushUser(user: string) {
    return user;
  }
  findUsers() {
    return this._users;
  }
}
