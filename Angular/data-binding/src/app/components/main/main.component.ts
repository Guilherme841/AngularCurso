import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  order: boolean = true;
  urlImage: any =
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  keyBoardValue: string = '';
  getOrder() {
    return true;
  }

  getValor() {
    return 5;
  }
  alert() {
    alert('Ok');
  }
  onKeyUp(event: KeyboardEvent) { // Posso tipar a variavel pra usar Intelligence .Tal
    this.keyBoardValue += event.key; // isso é o mesmo que o de baixo
    // this.keyBoardValue = ((<HTMLInputElement>event.target).value);
  }
}
