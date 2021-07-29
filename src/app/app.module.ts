import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { SellersComponent } from './components/sellers/sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApprovalsComponent,
    BuyersComponent,
    SellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
