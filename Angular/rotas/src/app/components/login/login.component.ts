import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { FormsModule } from '@angular/forms';

export interface user {
  nome: string;
  senha: number | null;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [LoginAuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private _authService: LoginAuthService) {}
  protected user: user = {
    nome: '',
    senha: null,
  };
  fazerLogin() {
    this._authService.fazerLogin(this.user);
    // console.log(JSON.stringify(this.user));
  }
  ngOnInit() {}
}
