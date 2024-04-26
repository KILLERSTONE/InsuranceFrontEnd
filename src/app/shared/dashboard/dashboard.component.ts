import { Component, OnInit } from '@angular/core';
import { Policy } from '../types';
import { PolicyService } from '../policy.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  policies: Policy[] = [];

  empid!:number;
  empusername!:string;
    constructor(
    private policyService: PolicyService,
    private authService: AuthService,

  ) {}

  ngOnInit() {
    const uId = this.authService.getUserId();

    if (uId) {
      this.policyService.getUserPolicies(uId).subscribe(
        (policies: Policy[]) => {
          this.policies = policies;
          this.empid=Number(uId);
          this.empusername=sessionStorage.getItem('username') as string;
          console.log(this.policies);
        },
        (error) => console.error('Error fetching policies: ', error)
      );
    } else {
      console.log('No user id found');
      this.authService.logout();
    }
  }
}
