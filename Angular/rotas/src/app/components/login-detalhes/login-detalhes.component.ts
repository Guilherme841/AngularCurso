import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
  constructor(private _routeId: ActivatedRoute) {}
  ngOnInit(): void {
    this.subscribe = this._routeId.params.subscribe((newId: any) => {
      this.id = newId['id'];
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
