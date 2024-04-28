import { Component, OnInit } from '@angular/core';
import { PoliciesService } from './policies.service';
import { Policy } from '../types';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
})
export class PoliciesComponent implements OnInit {
  constructor(private policyService: PoliciesService) {}

  ngOnInit() {
    this.loadPolicies();
  }
  policies: Policy[] = [];

  loadPolicies(): void {
    this.policyService.getAllPolicies().subscribe(
      (policies: Policy[]) => {
        this.policies = policies;
      },
      (error) => {
        console.error('Error fetching cards: ', error);
      }
    );
  }
}
