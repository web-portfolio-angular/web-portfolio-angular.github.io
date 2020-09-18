import { Component, OnInit } from '@angular/core';

import { Policy } from '../shared/models/policy.model';
import { PolicyService } from '../shared/services/policy.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Policy
        } 
      })
      console.log(this.policies);
    });

    
    
  }

  policy: Policy = {
    // id: 'dasda',
    description: 'test6'
  }
  
  add(){
    this.create(this.policy);
  }


  create(policy: Policy){
    this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }

}
