import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from '../my-form/my-form.component';
import { InputPropertyComponent } from '../input-property/input-property.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, MyFormComponent,InputPropertyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  urlImage: any =
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  order: boolean = true;

  valorString: string = 'EMPTY';

  getOrder() {
    return true;
  }

  getValor() {
    return 5;
  }
  alert() {
    alert('Ok');
  }
  keyBoardValue: string = '';
  onKeyUp(event: KeyboardEvent) {
    // Posso tipar a variavel pra usar Intelligence(autoComplete) .preset
    this.keyBoardValue += event.key; // isso é o mesmo que o de baixo
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
      let article = button.closest('.article-aula');
      article?.classList.toggle('article-open');
      button.textContent = button.textContent === 'less' ? 'more' : 'less';
    }
  }
}
