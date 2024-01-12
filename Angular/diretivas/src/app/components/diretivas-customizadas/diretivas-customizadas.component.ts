import { Component } from '@angular/core';

import { ColorBlueDirective } from '../../diretivas/color-blue.directive';
import { HoverMouseDirective } from '../../diretivas/hover-mouse.directive';
import { HighlightDirective } from '../../diretivas/highlight.directive';
import { FormsModule } from '@angular/forms';

// Necessário importar a diretiva.
@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [
    ColorBlueDirective,
    HoverMouseDirective,
    HighlightDirective,
    FormsModule,
  ],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss',
})
export class DiretivasCustomizadasComponent {
  backgroundColor!: string;
  constructor() {}
}
