import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-style.component.html',
  styleUrl: './diretiva-style.component.scss',
})
export class DiretivaStyleComponent {
  buttonOn: boolean = false;
  fontSize: number = 1;
}
