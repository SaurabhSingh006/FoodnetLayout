import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { SellersComponent } from './components/sellers/sellers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'approvals',
    component: ApprovalsComponent
  },
  {
    path: 'buyers',
    component: BuyersComponent
  },
  {
    path: 'sellers',
    component: SellersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
