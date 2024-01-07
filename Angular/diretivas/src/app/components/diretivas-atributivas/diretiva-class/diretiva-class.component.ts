import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-class.component.html',
  styleUrl: './diretiva-class.component.scss',
})
export class DiretivaClassComponent {
  starBoolean: boolean = false;
}
