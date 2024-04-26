import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { DetailsComponent } from './details/details.component';
import { CardformComponent } from './cardform/cardform.component';
import { LoginGuard } from '../auth/login.guard';

const routes: Routes = [

    //{path:'payment',component:PaymentComponent},
    { path: 'payment/cards', component: DetailsComponent },
    { path: 'payment/form', component: CardformComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
