import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardInfo } from '../shared/types';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnChanges{
  @Input() selectedCard: CardInfo | null = null;

  constructor() {}
  reloadDetails:boolean=false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCard'] && !changes['selectedCard'].firstChange) {
      console.log('Selected card changed:', this.selectedCard);
    }
  }
  receiveSelectedCard(card: CardInfo): void {
    this.selectedCard = card;
    console.log('Selected card received in PaymentComponent:', this.selectedCard);
  }


  reloadForm(): void {
    console.log('Form submitted');
    this.reloadDetails=!this.reloadDetails;
  }

}
