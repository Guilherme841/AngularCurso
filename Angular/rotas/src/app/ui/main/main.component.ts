import { Component } from '@angular/core';
import { IdService } from '../../services/id.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  providers: [IdService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private _id: IdService) {}
  sendId(idReceived: unknown) {
    this._id.getId(idReceived);
  }
}
