import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-switch.component.html',
  styleUrl: './diretiva-switch.component.scss',
})
export class DiretivaSwitchComponent {
  cases: string = 'home';
}
