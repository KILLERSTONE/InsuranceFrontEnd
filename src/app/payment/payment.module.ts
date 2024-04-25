import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { DetailsComponent } from './details/details.component';
import { CardformComponent } from './cardform/cardform.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentComponent,
    DetailsComponent,
    CardformComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    PaymentComponent
  ]
})
export class PaymentModule { }
