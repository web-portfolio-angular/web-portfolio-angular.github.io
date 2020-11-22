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
    const lastVisitedLink: {
      lastVisitedLink: string
    } = JSON.parse(localStorage.getItem('sell-buy-car-LastVisitedLink'));

    if (lastVisitedLink) {
      this.router.navigate([lastVisitedLink]);
    }    
  }

  saveLastVisitedLinkToLocalStore(link: string) {
    localStorage.setItem('sell-buy-car-LastVisitedLink', JSON.stringify('/sell-buy-car/' + link));
  }
}
