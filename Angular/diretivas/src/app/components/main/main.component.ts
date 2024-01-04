import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaIfComponent } from '../diretiva-if/diretiva-if.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, DiretivaIfComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  nome: string = 'Fulano';
  isTrueToggle: boolean = false;
  isTrueClass: boolean = false;
  isTrueStyle: boolean = false;
  showedArticle(button: Event) {
    const buttonClicked = button.target as HTMLElement;
    const fatherArticle = buttonClicked.closest('.article-aula');
    fatherArticle?.classList.toggle('showed-article');
  }
}
