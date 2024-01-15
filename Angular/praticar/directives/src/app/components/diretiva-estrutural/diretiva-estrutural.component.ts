import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-estrutural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-estrutural.component.html',
  styleUrl: './diretiva-estrutural.component.scss',
})
export class DiretivaEstruturalComponent {
  toggleBoolean: boolean = false;
  isLoadUsers: boolean = false;
  arrayUsers!: Array<string>;
  loadUsers() {
    this.arrayUsers = ['Fulano', 'Ciclano', 'Tirano'];
    this.isLoadUsers = !this.isLoadUsers;
  }
}
