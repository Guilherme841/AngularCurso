import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-cycle-metodo',
  standalone: true,
  imports: [],
  templateUrl: './cycle-metodo.component.html',
  styleUrl: './cycle-metodo.component.css',
})
export class CycleMetodoComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked
{
  constructor() {
    console.log('construtor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
}
