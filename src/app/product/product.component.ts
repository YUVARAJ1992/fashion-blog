import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductList: any[] = [];

  ProductListOriginal: any[] = [];

  CategoryList: any[] = [];

  NewProduct: any = {
    category: '',
    description: '',
    id: '',
    image: '',
    price: '',
    title: ''
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.loadProduct().subscribe((response: any) => {
      // console.log(response);
      this.ProductList = response;
      this.ProductListOriginal = response;

    }, (error) => {
      console.log(error);
    });

    this.api.loadCategories().subscribe((response: any) => {
      console.log(response);
      this.CategoryList = response;
    }, (error) => {
      console.log(error)
    });
  }

  onSelectCategory(event: any) {
    console.log(event.target.value)

    if (event.target.value == "Show All Categories") {
      this.ProductList = this.ProductListOriginal;
    } else {
      let filteredList = this.ProductListOriginal.filter((value) => {
        return value.category == event.target.value
      });

      console.log(filteredList);
      this.ProductList = filteredList;
    }
  }

  addNewProduct() {
    console.log(this.NewProduct);
    this.ProductListOriginal.push(this.NewProduct);
    this.NewProduct = {
      category: '',
      description: '',
      id: '',
      image: '',
      price: '',
      title: ''
    }
  }

}

