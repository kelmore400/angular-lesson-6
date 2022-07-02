import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private showProductsService: ListService, private showNumbersService: NumbersService ) { }
  products: any[] = [];
  name: string = "";

  onSearch() {
    this.products = this.showProductsService.getProducts().filter(item => item.name.includes(this.name));
  }

  getMax() {
    return this.showNumbersService.maxNumber();
  }

  getSortedAsc() {
    return this.showNumbersService.sortAsc();
  }

  getSortedDesc() {
    return this.showNumbersService.sortDesc();
  }
  
  ngOnInit(): void {
    this.products = this.showProductsService.getProducts();
  }

}
