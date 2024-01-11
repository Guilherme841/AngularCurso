import { Component } from '@angular/core';
import { ColorBlueDirective } from '../../diretivas/color-blue.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [ColorBlueDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss',
})
export class DiretivasCustomizadasComponent {

}
