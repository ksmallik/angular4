import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stackvote',
  template: `
    <div>
      <p [class]="style1" (click)="onClickUp()">More</p></div>
    <div>
      <p>
        {{ voteCount }}
      </p></div>
    <div name="down">
      <p [class]="myVote" (click)="onClickDown()">Less</p></div>
  `,
  styles: []
})
export class StackvoteComponent {

  @Input() voteCount = 10;
  @Input() className = '';

  style1 = {
    'background-color': '#ccc',
    'cursor': 'pointer'
  };

  style2 = {
    'background-color': 'orange',
    'cursor': 'pointer'
  };

  constructor() {

  }

  @Output() changes = new EventEmitter();

  onClickUp() {
    this.className = style1;
  }
      onClickDown() {
    if (this.voteCount === VoteCount - 1) {
      this.voteCount++;
    }
  }

}
