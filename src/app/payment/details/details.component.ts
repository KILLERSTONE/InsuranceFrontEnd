import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardInfo } from '../../shared/types';
import { PaymentService } from '../payment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {
  cards: CardInfo[] = [];
  @Input() reloadDetails: boolean = false;
  @Output() returnCard = new EventEmitter<CardInfo>();
  selectedCard: CardInfo | null = null;

  constructor(private paymentService: PaymentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reloadDetails'] && this.reloadDetails) {
      this.loadCards();
    }

  }

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
        console.log('Card deleted successfully');
        this.loadCards();
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 200) {
          console.log('Card deleted successfully');
          this.loadCards();
        } else {
          console.error('Error deleting card: ', error);
        }
      }
    );
  }

  onTableRowClick(card: CardInfo): void {
    console.log("Row clicked: ", card);
    this.selectedCard = card;
    this.returnCard.emit(this.selectedCard);
  }

}
