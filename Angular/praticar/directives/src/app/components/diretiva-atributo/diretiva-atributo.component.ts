import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-atributo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-atributo.component.html',
  styleUrl: './diretiva-atributo.component.scss',
})
export class DiretivaAtributoComponent {
  toggleBoolean: boolean = false;
}
