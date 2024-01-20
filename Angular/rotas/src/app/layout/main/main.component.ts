import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, LoginComponent, ProfileComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
