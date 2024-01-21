import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: unknown = [];
  constructor(private _profile: ProfileService) {}
  ngOnInit(): void {
    this.user = this._profile.getLogin();
  }
}
