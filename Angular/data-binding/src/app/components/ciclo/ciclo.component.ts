import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: true,
  imports: [],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css',
})
export class CicloComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log(this.ngOnInit)
  }
}
