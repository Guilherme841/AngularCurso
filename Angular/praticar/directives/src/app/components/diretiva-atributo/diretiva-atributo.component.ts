import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from '../../directives/custom-directive.directive';

@Component({
  selector: 'app-diretiva-atributo',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomDirectiveDirective],
  templateUrl: './diretiva-atributo.component.html',
  styleUrl: './diretiva-atributo.component.scss',
})
export class DiretivaAtributoComponent {
  toggleBoolean: boolean = false;
  textoInput!: string;
  sendText() {
    alert('Texto Enviado Com Sucesso!');
  }
}
