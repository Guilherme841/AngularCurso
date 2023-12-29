import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',
})
export class MyFormComponent {
  nome: string = 'Ciclano';
  pessoa: any = {
    nome: 'fulano',
    idade: 20,
    adress: {
      street: 'street',
    },
  };
  teste(valueEvent: any) {
    console.log(valueEvent)
  }
}
