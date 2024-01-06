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
  indexNome: Array<number> = [1, 2, 3, 4, 5];
  indexUser: Array<number> = [1, 2, 3, 4, 5];
  emptyUser: string = '';
  cases: number = 1;
  isTrueToggle: boolean = false;
  isTrueClass: boolean = false;
  isTrueStyle: boolean = false;
  showedArticle(button: Event) {
    const buttonClicked = button.target as HTMLElement;
    const fatherArticle = buttonClicked.closest('.article-aula');
    fatherArticle?.classList.toggle('showed-article');
    buttonClicked.textContent =
      buttonClicked.textContent === 'LESS' ? 'MORE' : 'LESS';
  }
}
