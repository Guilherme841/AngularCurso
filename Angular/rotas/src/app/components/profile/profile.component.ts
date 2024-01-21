import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatListModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  users: any = [];
  constructor(private _profile: ProfileService) {}
  ngOnInit(): void {
    this.users = this._profile.getLogin();
  }
}
 