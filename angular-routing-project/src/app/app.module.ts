import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoutes } from './app-routing.module';
import { SupportComponent } from './support/support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { SupplierSupportComponent } from './supplier-support/supplier-support.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    CustomerSupportComponent,
    SupplierSupportComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
