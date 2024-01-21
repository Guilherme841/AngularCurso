import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-login-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './login-detalhes.component.html',
  styleUrl: './login-detalhes.component.scss',
})
export class LoginDetalhesComponent implements OnInit, OnDestroy {
  id!: unknown;
  subscribe!: Subscription;
  constructor(
    private _routeId: ActivatedRoute,
    private _profile: ProfileService
    ) {}
    ngOnInit(): void {
      this.subscribe = this._routeId.params.subscribe((newId: any) => {
        this.id = newId['id'];
        console.log(this._profile);
      });
    }
    ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
