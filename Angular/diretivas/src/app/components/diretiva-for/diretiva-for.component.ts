import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-for.component.html',
  styleUrl: './diretiva-for.component.scss',
})
export class DiretivaForComponent {
  users: Array<string> = ['Fulano', 'Ciclano'];
  items: Array<string> = ['Pedra', 'Papel', 'Tesoura'];
}
