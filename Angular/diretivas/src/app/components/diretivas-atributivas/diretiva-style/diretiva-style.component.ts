import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-style',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva-style.component.html',
  styleUrl: './diretiva-style.component.scss',
})
export class DiretivaStyleComponent {
  buttonOn: boolean = false;
  fontSize: number = 1;
}
