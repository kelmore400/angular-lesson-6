import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }
  numbers: any[] = [ 56, 13, 10, 113, 7, 73, 11, 12, 43, 8, 2, 5, 16, 20, 88];

  sortAsc() {
    return this.numbers.sort((a, b) => a - b);
  }

  sortDesc() {
    return this.numbers.sort((a, b) => b - a);
  }

  maxNumber() {
    return Math.max(...this.numbers);
  }
}
