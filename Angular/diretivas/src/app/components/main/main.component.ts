import { DiretivaIfComponent } from '../diretiva-if/diretiva-if.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DiretivaIfComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  showedArticle(button: Event) {
    let buttonClicked = button.target as HTMLElement;
    let fatherArticle = buttonClicked.closest('.article-aula');
    fatherArticle?.classList.toggle('showed-article');
  }
}
