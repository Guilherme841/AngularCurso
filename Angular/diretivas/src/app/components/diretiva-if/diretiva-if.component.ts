import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-if.component.html',
  styleUrl: './diretiva-if.component.css',
})
export class DiretivaIfComponent {
  isTrueToggle: boolean = false;
}
