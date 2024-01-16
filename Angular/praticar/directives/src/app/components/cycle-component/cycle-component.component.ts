import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-cycle-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cycle-component.component.html',
  styleUrl: './cycle-component.component.scss',
})
export class CycleComponentComponent
  implements OnDestroy, OnInit, AfterViewInit
{
  toggleBoolean: boolean = true;
  @ViewChild('para', { static: true }) paragrafo!: ElementRef;

  ngOnInit(): void {
    console.log('Componente Cycle Carregado!');
  }
  ngAfterViewInit(): void {
    console.log(this.paragrafo);
  }
  ngOnDestroy(): void {
    console.log('NgDestroy Executado!');
  }
}
