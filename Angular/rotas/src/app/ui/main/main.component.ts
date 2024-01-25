import { Component } from '@angular/core';
import { IdService } from '../../services/id.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  providers: [IdService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private _id: IdService) {}
  sendId(idReceived: string | number) {
    this._id.getId(idReceived);
  }
}
