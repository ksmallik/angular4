import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-heart',
  template: `
    <p >More</p>
    <p [class]="name" (click)="onClick()">
      {{ value }}
    </p>
    <p>less</p>
  `,
  styles: [`
    .off {
      background-color: #ccc;
      cursor: pointer;
    }

    .on {
      background-color: deeppink;
      cursor: pointer;
    }
  `]
})
export class HeartComponent implements OnInit {

  @Input() name = 'off';
  @Input() value = 0;

  @Output() changes = new EventEmitter();

  onClick() {
    if (this.value === 10) {
      this.value = 11;
      this.name = 'on';
    } else {
      this.value = 10;
      this.name = 'off';
    }
    this.changes.emit({newValue: this.value});
  }

  constructor() {
  }

  ngOnInit() {
    this.value = 10;
  }

}
