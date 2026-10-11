import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly count = signal(0);

  //Increment Number
  numIncrement() {
    this.count.update((count) => count + 1);
  }

  //Decrement Number
  numDecrement() {
    this.count.update((count) => Math.max(0, count - 1));
  }

  //Reset Value
  reset() {
    this.count.set(0);
  }
}
