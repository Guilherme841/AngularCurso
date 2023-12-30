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
  Input,
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
  @Input() inicialValue: number = 10;
  constructor() {
    // this.log('construtor');
  }
  ngOnInit(): void {
    // this.log('ngOnInit');
  }
  ngOnChanges(): void {
    // this.log('OnChanges');
  }
  ngOnDestroy(): void {
    // this.log('OnDestroy');
  }
  ngDoCheck(): void {
    // this.log('doCheck');
  }
  ngAfterContentChecked(): void {
    // this.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    // this.log('AfterContentInit');
  }
  ngAfterViewInit(): void {
    // this.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    // this.log('AfterViewChecked');
  }
  private log(hook: string) {
    console.log(hook);
  }
}
