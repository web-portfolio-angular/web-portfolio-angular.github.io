import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  test(){
    let email = 'testing@email.com';
    let name = 'Test';

    this.authService.signUpAdditionalData(email, name).subscribe(data =>{
      console.log(email);
      
    }, error => {
      console.log('ne');
      
    })
  }
}
