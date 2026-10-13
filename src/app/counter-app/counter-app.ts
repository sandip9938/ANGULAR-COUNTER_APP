import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  styleUrl: './counter-app.css',
  templateUrl: './counter-app.html',
})
export class CounterApp {
  readonly count = signal(0);

  // Increment Number
  numIncrement() {
    this.count.update((count) => count + 1);
  }

  // Decrement Number
  numDecrement() {
    this.count.update((count) => Math.max(0, count - 1));
  }

  // Reset Value
  reset() {
    this.count.set(0);
  }
}
