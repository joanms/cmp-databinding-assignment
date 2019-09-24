import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Odd and even numbers are defined as arrays
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // When the event starts, the numbers are checked and pushed to the appropriate array - odd or even
  onIntervalStart(outputNumber: number) {
    if (outputNumber % 2 === 0) {
      this.evenNumbers.push(outputNumber);
    } else {
      this.oddNumbers.push(outputNumber);
    }
  }
}
