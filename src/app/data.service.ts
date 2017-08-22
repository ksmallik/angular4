import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {}

  cars = ['Ambassador', 'Fiat', 'Safari'];

  retData() {
    return 'This is my Data! Dude!!';
  }
}
