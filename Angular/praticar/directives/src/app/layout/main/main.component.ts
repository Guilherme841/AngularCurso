import { Component } from '@angular/core';
import { DiretivaEstruturalComponent } from '../../components/diretiva-estrutural/diretiva-estrutural.component';
import { DiretivaAtributoComponent } from '../../components/diretiva-atributo/diretiva-atributo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DiretivaEstruturalComponent,DiretivaAtributoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
