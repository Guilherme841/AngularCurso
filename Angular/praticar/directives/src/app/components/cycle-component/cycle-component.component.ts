import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cycle-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cycle-component.component.html',
  styleUrl: './cycle-component.component.scss',
})
export class CycleComponentComponent
  implements OnDestroy, OnInit, AfterViewInit, OnChanges
{
  toggleBoolean = true;
  // @ViewChild('inputValue', { static: true }) input!: ElementRef;
  @Input() valorInput!: string;
  firstOnChange = true;
  mes!: number;
  ngOnInit(): void {
    console.log('Componente Cycle Carregado!');
    const data = new Date();
    this.mes = data.getMonth();
  }
  ngAfterViewInit(): void {
    // console.log(this.input);
  }
  ngOnDestroy(): void {
    console.log('Componente Destruído!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valorInput'] && this.firstOnChange === false) {
      console.log('Input Mudou o Valor!', this.valorInput);
    } else {
      this.firstOnChange = false;
    }
  }
}
