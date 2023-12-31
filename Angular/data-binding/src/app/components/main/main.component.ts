import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MyFormComponent } from '../my-form/my-form.component';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';
import { CicloComponent } from '../ciclo/ciclo.component';
import { CycleMetodoComponent } from '../ciclo/cycle-metodo/cycle-metodo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
    MyFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    CycleMetodoComponent,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  urlImage: any =
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  order: boolean = true;
  valorString: string = 'EMPTY';
  valor: number = 5;
  showedCycle: boolean = false;
  inicialValue: number = 0;
  wouldLikeDelete: boolean = false;
  getOrder() {
    return true;
  }

  getValor() {
    return 5;
  }
  alert() {
    alert('Ok');
  }
  keyValue: string = '';
  onKeyUp(keyValue: KeyboardEvent) {
    // Posso tipar a variavel pra usar Intelligence(autoComplete) .preset
    // console.log(keyValue) exibe o objeto retornado pela função
    this.keyValue += keyValue.key; // isso é o mesmo que o de baixo
    // this.keyBoardValue = ((<HTMLInputElement>event.target).value);
  }
  savedValue: string = '';
  saveValue(valor: any) {
    this.savedValue = valor;
  }
  isMouseOver: boolean = false;
  mouseHover() {
    this.isMouseOver = !this.isMouseOver;
  }
  articleOpen: boolean = false;
  openArticle(event: Event) {
    let button = event.target as HTMLElement;
    if (button.classList.contains('button')) {
      let clickedArticle = button.closest('.article-aula');
      clickedArticle?.classList.toggle('article-open');
      button.textContent = button.textContent === 'less' ? 'more' : 'less';
    }
  }
  getValue(valor: any) {
    // console.log(valor.newValue);
    // console.log(valor);
  }
  selectedOption(valueOption: any) {
    // console.log(valueOption);
  }
}
