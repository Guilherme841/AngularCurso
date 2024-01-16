import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-cycle-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cycle-component.component.html',
  styleUrl: './cycle-component.component.scss',
})
export class CycleComponentComponent implements OnDestroy {
  toggleBoolean: boolean = true;

  ngOnDestroy(): void {
    console.log('Componente Destruído!');
  }
  count = 0;
  constructor() {
    // Start a timer to increment the counter every second.
    const id = setInterval(() => this.count++, 5000);
    // Stop the timer when the component is destroyed.
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => clearInterval(id));
  }
}
