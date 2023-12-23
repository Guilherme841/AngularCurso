import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

  urlImage: any =
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  order: boolean = true;
  keyBoardValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;
  nome: string = 'Ciclano';

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
  saveValue(valor: any) {
    this.savedValue = valor;
  }
  mouseHover() {
    this.isMouseOver = !this.isMouseOver;
  }
}
