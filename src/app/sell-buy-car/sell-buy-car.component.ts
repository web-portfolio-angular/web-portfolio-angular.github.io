import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-buy-car',
  templateUrl: './sell-buy-car.component.html',
  styles: []
})
export class SellBuyCarComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
}
