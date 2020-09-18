import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../shared/services/policy.service';
import { Policy } from '../shared/models/policy.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
