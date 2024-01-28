import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss',
})
export class AlunoFormComponent {
  onSubmit() {}
}
