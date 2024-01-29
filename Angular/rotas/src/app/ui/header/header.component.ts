import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { IdService } from '../../services/id.service';
import { LoginAuthService } from '../../services/login-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  providers: [IdService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private eventSubscribe: Subscription = new Subscription();
  private eventSubscribe2: Subscription = new Subscription();
  pagina!: number;
  showNav: boolean = false;
  constructor(
    private _id: IdService,
    private _loginAuthService: LoginAuthService
  ) {}
  id!: string | number;
  ngOnInit() {
    this.pagina = this._id.pagina;
    this.eventSubscribe = IdService.sendId.subscribe((id) => {
      this.id = id;
    });
    this.eventSubscribe2 = LoginAuthService.mostrarMenu.subscribe((mostrar) => {
      this.showNav = mostrar;
    });
  }
  ngOnDestroy() {
    this.eventSubscribe2.unsubscribe();
    this.eventSubscribe.unsubscribe();
  }
}
