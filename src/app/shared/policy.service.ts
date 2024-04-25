import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiPath='https://localhost:7293/api';
  constructor(private http: HttpClient) { }

  getUserPolicies(userId:string): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.apiPath}/policies/all/${userId}`);
  }
  
}
