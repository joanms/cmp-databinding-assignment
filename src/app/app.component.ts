import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // When the event starts, the current number is output
  onIntervalStart(outputNumber: number) {
    console.log(outputNumber);
  }
}
