import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="toggle(masterName)" >Toggle</button>
  `,
})
export class ChildComponent {
  @Input('childToMaster') masterName: string;

  @Output() childToParent = new EventEmitter<String>();

  toggle(name) {
    this.childToParent.emit(name);
  }
}
