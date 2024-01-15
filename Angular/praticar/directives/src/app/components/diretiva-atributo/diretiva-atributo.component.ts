import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-atributo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva-atributo.component.html',
  styleUrl: './diretiva-atributo.component.scss',
})
export class DiretivaAtributoComponent {
  toggleBoolean: boolean = false;
  nomeInput!: string;
}
