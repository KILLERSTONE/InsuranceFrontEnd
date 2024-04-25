import { Component } from '@angular/core';
import { CardInfo } from '../shared/types';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedCard: CardInfo | null = null;

  constructor() {}

  receiveSelectedCard(card: CardInfo): void {
    this.selectedCard = card;
    console.log('Selected card received in PaymentComponent:', this.selectedCard);
  }
}
