import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdService } from '../../services/id.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private eventSubscribe!: Subscription;
  constructor(private _id: IdService) {}
  id!: string | number;
  ngOnInit() {
    this.eventSubscribe = IdService.sendId.subscribe((id) => {
      this.id = id;
    });
  }
  ngOnDestroy() {
    this.eventSubscribe.unsubscribe();
  }
}
