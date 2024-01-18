import { Component } from '@angular/core';
import { ExemplosPipesComponent } from '../../components/exemplos-pipes/exemplos-pipes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ExemplosPipesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
