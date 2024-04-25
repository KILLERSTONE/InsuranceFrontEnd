import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardInfo } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiPath = 'https://localhost:7293/api/card';

  constructor(private http: HttpClient) { }

  addCard(card: CardInfo): Observable<any> {
    return this.http.post<any>(`${this.apiPath}`, card);
  }

  updateCard(userId: number, card: CardInfo): Observable<any> {
    return this.http.put<any>(`${this.apiPath}/${userId}`, card);
  }

  getAllCards(): Observable<CardInfo[]> {
    return this.http.get<CardInfo[]>(`${this.apiPath}`);
  }

  getCardById(cardId: number): Observable<CardInfo> {
    return this.http.get<CardInfo>(`${this.apiPath}/id/${cardId}`);
  }

  getCardByName(cardName: string): Observable<CardInfo> {
    return this.http.get<CardInfo>(`${this.apiPath}/name/${cardName}`);
  }

  deleteCard(cardId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiPath}/${cardId}`);
  }
}
