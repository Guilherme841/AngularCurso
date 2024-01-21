import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getLogin() {
    return [
      {
        id: 1,
        user: 'user',
      },
      {
        id: 2,
        user: 'user2',
      },
    ];
  }
  constructor() {}
}
