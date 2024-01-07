import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaIfComponent } from '../diretivas-estruturais/diretiva-if/diretiva-if.component';
import { DiretivaSwitchComponent } from '../diretivas-estruturais/diretiva-switch/diretiva-switch.component';
import { DiretivaForComponent } from '../diretivas-estruturais/diretiva-for/diretiva-for.component';
import { CliEstruturaComponent } from '../cli-estrutura/cli-estrutura.component';
import { DiretivaClassComponent } from '../diretivas-atribuitivas/diretiva-class/diretiva-class.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DiretivaIfComponent,
    DiretivaSwitchComponent,
    DiretivaForComponent,
    CliEstruturaComponent,
    DiretivaClassComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  nome: string = 'Fulano';
  indexNome: Array<number> = [1, 2, 3, 4, 5];
  indexUser: Array<number> = [1, 2, 3, 4, 5];
  emptyUser: string = '';
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
