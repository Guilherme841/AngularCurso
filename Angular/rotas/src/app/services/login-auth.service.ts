import { Injectable } from '@angular/core';
import { user } from '../components/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  constructor(private _router: Router) {}
  protected authUser: boolean = false;
  fazerLogin(user: user) {
    if (user.nome === 'rodorfo' && user.senha == 123) {
      this._router.navigate(['home']);
      return (this.authUser = true);
    } else {
      return;
    }
  }
}
