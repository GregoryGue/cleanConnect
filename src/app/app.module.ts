import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CleanersComponent } from './cleaners/cleaners.component';
import { CustomersComponent } from './customers/customers.component';
import { CleanerService } from './shared/services/cleaner.service';
import { CustomerService } from './shared/services/customer.service';
import { CleanerDetailComponent } from './cleaners/cleaner-detail/cleaner-detail.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { SingleCustomerComponent } from './customers/customer-list/single-customer/single-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes =[
  { path: '', component: WelcomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'cleaners', component: CleanersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CleanersComponent,
    CustomersComponent,
    CleanerDetailComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    SingleCustomerComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
    CleanerService,
    CustomerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
