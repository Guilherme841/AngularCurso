import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GetServeService {
  // Preciso exportar esse serviço pro meu componente

  constructor() {}

  getList() {
    return ['TypeScript', 'Angular', 'Ruby']; // Recebo as informações do serviço e mando pro componente
  }
}
