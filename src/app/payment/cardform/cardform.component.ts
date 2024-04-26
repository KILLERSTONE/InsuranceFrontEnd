import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardInfo } from '../../shared/types';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit, OnChanges {
  @Input() selectedCard: CardInfo | null = null;
  @Output() formSubmitted = new EventEmitter<void>();
  cardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.initializeForm();
    if (this.selectedCard) {
      this.preloadFormData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCard'] && !changes['selectedCard'].firstChange) {
      if (this.selectedCard) {
        this.preloadFormData();
      } else {
        this.cardForm.reset();
      }
    }
  }

  private initializeForm(): void {
    this.cardForm = this.formBuilder.group({
      cardId: [this.selectedCard?.cardId || null],
      cardOwner: [this.selectedCard?.cardOwner || '', Validators.required],
      cardNo: [this.selectedCard?.cardNo || null, Validators.required],
      securityCode: [this.selectedCard?.securityCode || null, Validators.required],
      validThrough: [this.selectedCard?.validThrough || null, Validators.required]
    });
  }

  private preloadFormData(): void {
    if (this.selectedCard) {
      this.cardForm.patchValue({
        cardId: [this.selectedCard?.cardId],
        cardOwner: this.selectedCard.cardOwner,
        cardNo: this.selectedCard.cardNo,
        securityCode: this.selectedCard.securityCode,
        validThrough: this.formatDate(this.selectedCard.validThrough)
      });
    }
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const formData = this.cardForm.value;
      if (formData.cardId) {
        this.paymentService.updateCard(formData.cardId, formData).subscribe(
          () => {
            console.log('Card updated successfully');
            this.cardForm.reset();
          },
          (error) => {
            console.error('Error updating card: ', error);
          }
        );
      } else {
        this.paymentService.addCard(formData).subscribe(
          () => {
            console.log('Card created successfully');
            this.cardForm.reset();
          },
          (error) => {
            console.error('Error creating card: ', error);
          }
        );
      }
    } else {
      console.error('Form is invalid');
    }

    this.formSubmitted.emit();
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }
}
