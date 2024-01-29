import { EventEmitter, Injectable } from '@angular/core';
import { user } from '../components/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  constructor(private _router: Router) {}
  protected authUser: boolean = false;
  static mostrarMenu = new EventEmitter<boolean>();
  fazerLogin(user: user) {
    if (user.nome === 'rodorfo' && user.senha == 123) {
      this.authUser = true;
      LoginAuthService.mostrarMenu.emit(true);
      this._router.navigate(['home']);
    } else {
      this.authUser = false;
      LoginAuthService.mostrarMenu.emit(false);
    }
  }
}
