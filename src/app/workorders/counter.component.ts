import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <span class="counter">
      <input type="text" [value]="count">
      <button (click)="increment()">
        Increment
      </button>
      <button (click)="decrement()">
      Decrement
    </button>
    </span>
  `
})
export class CounterComponent {

  @Input()
  count = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}

