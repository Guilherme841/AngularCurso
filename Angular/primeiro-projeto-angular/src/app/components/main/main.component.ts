import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetServeService } from '../../services/get-serve.service'; // Preciso importar o serviço no meu componente

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [GetServeService] // No providers vai os serviços fornecedores
})
export class MainComponent {

  arrayList: string[] = []; // Componente de lógica, apenas pra renderizar pro client as informações do serviço

  constructor(private getServe: GetServeService) { // Injeção de dependência ,crio a variavel getServe privada,
    this.arrayList = this.getServe.getList()       // pra receber a minha classe getServeService e chamo a minha função
  }                                                // atraves dessa variavel privada

}
