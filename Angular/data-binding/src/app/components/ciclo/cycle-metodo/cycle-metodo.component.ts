import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle-metodo',
  standalone: true,
  imports: [],
  templateUrl: './cycle-metodo.component.html',
  styleUrl: './cycle-metodo.component.css',
})
export class CycleMetodoComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log(this.ngOnInit);
  }
}
