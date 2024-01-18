import { Injectable } from '@angular/core';

import { SearchUsersService } from './search-users.service';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  consoleLog(msg: string) {
    console.log(msg);
  }
}
