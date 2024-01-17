import { Component } from '@angular/core';
import { UsersComponent } from '../../components/users/users.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UsersComponent, CreateUserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
