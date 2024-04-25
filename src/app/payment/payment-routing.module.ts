import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardformComponent } from './cardform/cardform.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  {
    path:'',component:PaymentComponent
  },
  {
    path:'cards',component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
