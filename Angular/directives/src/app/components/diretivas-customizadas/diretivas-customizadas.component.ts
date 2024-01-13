import { Component } from '@angular/core';

import { ColorBlueDirective } from '../../directives/attribute-directive/color-blue.directive';
import { HoverMouseDirective } from '../../directives/attribute-directive/hover-mouse.directive';
import { HighlightDirective } from '../../directives/attribute-directive/highlight.directive';
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
  backgroundColor: string = '#000000';
  constructor() {}
}
