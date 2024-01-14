import { Component } from '@angular/core';
import { DiretivaEstruturalComponent } from '../../components/diretiva-estrutural/diretiva-estrutural.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DiretivaEstruturalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
