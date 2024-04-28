import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private httpClient:HttpClient) { }

  private apiPath='https://localhost:7293/api/policies';

  getAllPolicies():Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.apiPath}`);
  }
}
