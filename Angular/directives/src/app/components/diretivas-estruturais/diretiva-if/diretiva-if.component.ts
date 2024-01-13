import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElseDirective } from '../../../directives/structural-directive/else.directive';

@Component({
  selector: 'app-diretiva-if',
  standalone: true,
  imports: [CommonModule,ElseDirective],
  templateUrl: './diretiva-if.component.html',
  styleUrl: './diretiva-if.component.css',
})
export class DiretivaIfComponent {
  isTrueToggle: boolean = false;
}
