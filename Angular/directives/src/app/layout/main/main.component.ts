import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaIfComponent } from '../../components/diretivas-estruturais/diretiva-if/diretiva-if.component';
import { DiretivaSwitchComponent } from '../../components/diretivas-estruturais/diretiva-switch/diretiva-switch.component';
import { DiretivaForComponent } from '../../components/diretivas-estruturais/diretiva-for/diretiva-for.component';
import { CliEstruturaComponent } from '../../components/cli-estrutura/cli-estrutura.component';
import { DiretivaClassComponent } from '../../components/diretivas-atributivas/diretiva-class/diretiva-class.component';
import { DiretivaStyleComponent } from '../../components/diretivas-atributivas/diretiva-style/diretiva-style.component';
import { NgContentComponent } from '../../components/ng-content/ng-content.component';
import { DiretivasCustomizadasComponent } from '../../components/diretivas-customizadas/diretivas-customizadas.component';
import { OperadorElvisComponent } from '../../components/operador-elvis/operador-elvis.component';

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
    DiretivaStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    DiretivasCustomizadasComponent,
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
