import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getLogin() {
    return [
      {
        id: 1,
        name: 'name',
      },
      {
        id: 2,
        name: 'name2',
      },
    ];
  }
  constructor() {}
}
