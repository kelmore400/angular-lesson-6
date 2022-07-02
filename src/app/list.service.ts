import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  products = [ 
    {id: 1, name: "product 1", price: 110, description: "product1 text description"},
    {id: 2, name: "product 2", price: 120, description: "product2 text description"},
    {id: 3, name: "product 3", price: 130, description: "product3 text description"}, 
  ]; 
  
  getProducts() {
    return this.products;
  }
    
}
