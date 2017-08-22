import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  template: `<i
    class="glyphicon glyphicon-star"
    [class.glyphicon-star-empty]="!isFavourite"
    [class.glyphicon-star]="isFavourite"
    (click)="onClick()">
  </i>`
})
export class StarComponent implements OnInit {

  constructor() {
  }

  @Input() isFavourite = false;

  @Output() changes = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.changes.emit({newValue: this.isFavourite});
  }

  ngOnInit() {
  }
}
