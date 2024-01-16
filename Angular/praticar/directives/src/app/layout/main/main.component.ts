import { Component, EventEmitter, Output } from '@angular/core';

import { DiretivaEstruturalComponent } from '../../components/diretiva-estrutural/diretiva-estrutural.component';
import { DiretivaAtributoComponent } from '../../components/diretiva-atributo/diretiva-atributo.component';
import { NgContentComponent } from '../../components/ng-content/ng-content.component';
import { OutputPropertyComponent } from '../../components/output-property/output-property.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    DiretivaEstruturalComponent,
    DiretivaAtributoComponent,
    NgContentComponent,
    OutputPropertyComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  items() {
    
  }
}
