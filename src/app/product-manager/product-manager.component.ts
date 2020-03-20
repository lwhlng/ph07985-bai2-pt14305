import { Component, OnInit } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products = data;
  selected: Product;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selected);
  }
  detailProduct(product){
    this.selected = product;
    console.log(this.selected);
  }
  removeItem(id){
    this.products = this.products.filter(x => x.id !== id);
    console.log(this.selected.id);
    console.log(id);

  }
}