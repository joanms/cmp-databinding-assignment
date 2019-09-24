import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // @Output makes the event listenable from outside the component
  @Output() intervalStart = new EventEmitter<number>();
  interval;
  currentNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  // When the Start button is clicked, an event incrementing the number starts
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalStart.emit(this.currentNumber + 1);
      this.currentNumber++;
    }, 1000);
  }

  // When the Stop button is clicked, the above event stops
  onStopGame() {
    clearInterval(this.interval);
  }

}
