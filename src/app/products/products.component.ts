import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    const lastVisitedLink: {
      productsLink: string
    } = JSON.parse(localStorage.getItem('productsLink'));

    if (this.router.url.includes('/products/')) {
      this.router.navigate([this.router.url]);
      localStorage.setItem('productsLink', JSON.stringify(this.router.url));
    } else {
      if (lastVisitedLink) {
        this.router.navigate([lastVisitedLink]);
      } else {
        this.router.navigate([this.router.url]);
        localStorage.setItem('productsLink', JSON.stringify(this.router.url));
      }      
    }  
  }

  saveToLocalStore(data: string){
    localStorage.setItem('productsLink', JSON.stringify('/products/' + data));
  }
}
