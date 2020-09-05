import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  lastLink = localStorage.getItem('productsLink');
  
  constructor(private router: Router, private r:ActivatedRoute) { }

  ngOnInit() {
    if (this.lastLink){
      this.router.navigate([this.lastLink])
    } else{
      this.router.navigate(['products/lamborghini']) 
    }    
  }

  saveToLocalStore(data: string){
    localStorage.setItem('productsLink', '/products/' + data);
  }
}
