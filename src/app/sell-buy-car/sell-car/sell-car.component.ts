import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: [
  ]
})
export class SellCarComponent implements OnInit {
  sellCarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.sellCarForm = this.formBuilder.group({

    });
  }

  onSubmit(sellCarForm) {
    console.log(sellCarForm);
    
  }
}
