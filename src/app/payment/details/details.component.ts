import { Component, Output, output } from '@angular/core';
import { CardInfo } from '../../shared/types';
import { PaymentService } from '../payment.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cards: CardInfo[] = [];
  @Output() returnCard=new EventEmitter<CardInfo>();

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.paymentService.getAllCards().subscribe(
      (cards: CardInfo[]) => {
        this.cards = cards;
      },
      (error) => {
        console.error('Error fetching cards: ', error);
      }
    );
  }

  deleteCard(cardId: number): void {
    this.paymentService.deleteCard(cardId).subscribe(
      () => {
        this.cards = this.cards.filter((card) => card.cardId !== cardId);
      },
      (error) => {
        console.error('Error deleting card: ', error);
      }
    );
  }

  onSelectCard(card:CardInfo){
    this.returnCard.emit(card);
  }
}
