import {Component} from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  template: `
    <app-star [isFavourite]="post.isFavourite" ></app-star>
  `
})
export class MyComponent {
  // title = 'Angular';
  // arr = ['Mallik', 'Sudhakar', 'Hari'];

  constructor(private dataService: DataService) {

  }

  myBool = false;
  myStyle = null;
  someStr = '';

  classColor = {
    'green-color': true,
    'large-font': true
  };

  styleColor1 = {
    'color': 'brown',
    'font-size': '5em'
  };
  styleColor2 = {
    'color': 'green',
    'font-size': '3em'
  };

  /* Works */
  toggleDiv() {
    this.myBool = !this.myBool;
    this.myStyle = this.myBool ? this.styleColor1 : this.styleColor2;
  }

  // buttonDisabler = true;


  // Services
  ngOnInit() {
    alert(this.dataService.cars);
    this.someStr = this.dataService.retData();
  }
}
