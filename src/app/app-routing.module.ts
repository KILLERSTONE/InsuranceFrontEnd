import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/login.guard';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentRoutingModule } from './payment/payment-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PaymentRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
