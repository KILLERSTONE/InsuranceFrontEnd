import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { DetailsComponent } from './details/details.component';
import { CardformComponent } from './cardform/cardform.component';



@NgModule({
  declarations: [
    PaymentComponent,
    DetailsComponent,
    CardformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
