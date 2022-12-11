import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languages: Array<string> = ['JavaScript', 'Java'];
  index: number = 0;

  toggleDisplay(toggle) {
    this.index++;
  }
}
